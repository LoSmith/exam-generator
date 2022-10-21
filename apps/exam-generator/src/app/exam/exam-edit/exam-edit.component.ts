import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { trySetFormValue } from "../../shared/utils";
import { Exam } from "../models/exam-task.model";
import { createNewEmptyExamTask } from "../models/default-exam";
import { ExamForm } from "./exam-task-form.model";
import { TranslateService } from "@ngx-translate/core";
import { ClassSubject } from "../../shared/models/subject.model";
import { ExamService } from "../exam.service";

@Component({
  selector: "app-task-edit",
  templateUrl: "./exam-edit.component.html",
})
export class ExamEditComponent implements OnInit {
  public formControls = new ExamForm();
  public formGroup = new FormGroup(this.formControls);
  public examTaskSubjectOptions: string[] = Object.keys(ClassSubject);
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
    private taskService: ExamService,
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
        this.router.navigate([`exam/${this.urlTaskId}/task-not-found`]);
      }
    }
  }

  addTask(examTaskId: string) {
    const ids = this.formControls.examTasks.getRawValue();
    this.formControls.examTasks.setValue([... ids, examTaskId]);
  }

  deleteSubtask(toDeleteId: string) {
    const ids = this.formControls.examTasks.getRawValue() as string[];
    if (ids.includes(toDeleteId)) {
      this.formControls.examTasks.setValue(
        ids.filter((id) => id !== toDeleteId)
      );
    }
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

  public tryLoadExamTaskIntoForms(examTask: Exam): void {
    console.log(`trying to load ${JSON.stringify(examTask)}`);
    trySetFormValue(this.formControls.id, examTask.id, "id");
    trySetFormValue(this.formControls.title, examTask.title, "title");
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
      this.formControls.examTasks,
      examTask.examTasks,
      "taskEdit.examTasks"
    );
  }

  private serializeData(): Exam {
    return {
      id: this.formControls.id.getRawValue(),
      title: this.formControls.title.getRawValue(),
      metadata: {
        classLevel: this.formControls.metadataClassLevel.getRawValue() || 0,
        subject:
          this.formControls.metadataSubject.getRawValue() || ClassSubject.none,
        tags: this.formControls.metadataTags.getRawValue() || [],
      },
      examTasks: this.formControls.examTasks.getRawValue() || [],
    };
  }
}
