import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { TaskService } from "../task.service";
import { trySetFormValue } from "../../shared/utils";
import { ExamTask, ExamTaskSubject } from "../models/exam-task.model";
import {
  createNewEmptyExamTask,
  EMPTY_EXAM_SUB_TASK,
} from "../models/default-exam-task";
import { ExamTaskForm } from "./exam-task-form.model";
import { ExamSubTaskForm } from "./exam-sub-task/exam-sub-task-form.model";
import { ExamSubTask } from "../models/exam-sub-task.model";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit {
  public formControls = new ExamTaskForm();
  public formGroup = new FormGroup(this.formControls);
  public examTaskSubjectOptions: string[] = Object.keys(ExamTaskSubject);
  public examTaskClassLevelOptions: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];
  metadataTagsSuggestions: string[] = ["bla", "blub"];
  filteredMetadataTagsSuggestions: string[] = [];
  private urlTaskId!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private taskService: TaskService,
    private translationService: TranslateService
  ) {}

  async ngOnInit(): Promise<void> {
    this.urlTaskId = this.route.snapshot.params["id"];
    const isNewItem = this.route.snapshot.queryParams["isNewItem"];

    const foundItemInDb = await this.taskService.find(this.urlTaskId);
    console.log("item to load", [foundItemInDb]);
    if (foundItemInDb) {
      this.tryLoadExamTaskIntoForms(foundItemInDb);
    } else {
      // if there is no entry
      if (isNewItem) {
        const newExamTask = createNewEmptyExamTask(this.urlTaskId);
        this.tryLoadExamTaskIntoForms(newExamTask);
      } else {
        this.router.navigate([`tasks/${this.urlTaskId}/task-not-found`]);
      }
    }
  }

  addSubtask(subtask: ExamSubTask = EMPTY_EXAM_SUB_TASK) {
    const newSubtask = new FormGroup(new ExamSubTaskForm(subtask));
    this.formControls.subtasks.push(newSubtask);
  }

  deleteSubtask(index: number) {
    const currentSubtasks = this.formControls.subtasks;
    currentSubtasks.removeAt(index);
  }

  async saveExamTask() {
    const serializedData = this.serializeData();
    console.log("serializedData", serializedData);
    await this.taskService.create(serializedData);
    console.log("serializedData saved to db!");
    await this.router.navigate(["tasks"]);
  }

  async abortTaskEdit(event: Event) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: this.translationService.instant(
        "taskEdit.abortConfirmationText"
      ),
      icon: "pi pi-exclamation-triangle",
      acceptLabel: this.translationService.instant("app.yes"),
      rejectLabel: this.translationService.instant("app.no"),
      accept: () => {
        this.router.navigate(["tasks"]);
      },
      reject: () => {
        //reject action
      },
    });
  }

  public tryLoadExamTaskIntoForms(examTask: ExamTask): void {
    console.log(`trying to load ${JSON.stringify(examTask)}`);
    trySetFormValue(this.formControls.id, examTask.id, "id");
    trySetFormValue(
      this.formControls.metadataClassLevel,
      examTask.metadata?.classLevel,
      "metadataClassLevel"
    );
    trySetFormValue(
      this.formControls.metadataSubject,
      examTask.metadata?.subject,
      "metadataSubject"
    );
    trySetFormValue(
      this.formControls.metadataTags,
      examTask.metadata?.tags,
      "taskEdit.metadata.tags"
    );
    trySetFormValue(
      this.formControls.contextDescription,
      examTask.context?.description,
      "contextDescription"
    );
    trySetFormValue(
      this.formControls.contextImage,
      examTask.context?.image,
      "contextImage"
    );
    examTask.subtasks.forEach((subtask) => {
      this.addSubtask(subtask);
    });
  }

  private serializeData(): ExamTask {
    return {
      id: this.formControls.id.getRawValue(),
      title: this.formControls.title.getRawValue(),
      metadata: {
        classLevel: this.formControls.metadataClassLevel.getRawValue() || 0,
        subject:
          this.formControls.metadataSubject.getRawValue() || ExamTaskSubject.none,
        tags: this.formControls.metadataTags.getRawValue() || [],
      },
      context: {
        description: this.formControls.contextDescription.getRawValue() || "",
        image: this.formControls.contextImage.getRawValue() || "",
      },
      subtasks: this.formControls.subtasks.getRawValue() || [],
    };
  }
}
