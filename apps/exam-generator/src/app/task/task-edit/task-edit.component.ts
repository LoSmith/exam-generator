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

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit {
  public controls = new ExamTaskForm();
  public formGroup = new FormGroup(this.controls);
  public examTaskSubjectOptions: string[] = Object.keys(ExamTaskSubject);
  public examTaskClassLevelOptions: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];
  private urlTaskId!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private taskService: TaskService
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
    this.controls.subtasks.push(newSubtask);
  }

  deleteSubtask(index: number) {
    const currentSubtasks = this.controls.subtasks;
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
      message:
        "Are you sure you want to exit the task editor? All changes will be lost on abort.",
      icon: "pi pi-exclamation-triangle",
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
    trySetFormValue(this.controls.id, examTask.id, "id");
    trySetFormValue(
      this.controls.metadataClassLevel,
      examTask.metadata?.classLevel,
      "metadataClassLevel"
    );
    trySetFormValue(
      this.controls.metadataSubject,
      examTask.metadata?.subject,
      "metadataSubject"
    );
    trySetFormValue(
      this.controls.contextDescription,
      examTask.context?.description,
      "contextDescription"
    );
    trySetFormValue(
      this.controls.contextImage,
      examTask.context?.image,
      "contextImage"
    );
    examTask.subtasks.forEach((subtask) => {
      this.addSubtask(subtask);
    });
  }

  private serializeData(): ExamTask {
    return {
      id: this.controls.id.getRawValue(),
      metadata: {
        classLevel: this.controls.metadataClassLevel.getRawValue() || 0,
        subject:
          this.controls.metadataSubject.getRawValue() || ExamTaskSubject.none,
        tags: this.controls.metadataTags.getRawValue() || [],
      },
      context: {
        description: this.controls.contextDescription.getRawValue() || "",
        image: this.controls.contextImage.getRawValue() || "",
      },
      subtasks: this.controls.subtasks.getRawValue() || [],
    };
  }
}
