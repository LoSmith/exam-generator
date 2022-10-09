import { Component, OnInit } from "@angular/core";
import { ExamTask, ExamTaskSubject } from "../models/exam-task.model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { getKeysFromEnum } from "../../shared/utils";
import { TaskService } from "../task.service";
import { createNewExamTask } from "../models/default-exam-task";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit {

  public urlTaskId = "";
  public controls = {
    id: new FormControl(""),
    question: new FormControl(""),
    solution: new FormControl(""),
    metadataClass: new FormControl(1),
    metadataSubject: new FormControl(ExamTaskSubject.biology),
  };

  form: FormGroup;
  public examTaskSubjectOptions: string[] = getKeysFromEnum(ExamTaskSubject);
  public examTaskClassLevelOptions: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public taskService: TaskService
  ) {
    this.form = fb.group(this.controls);
  }

  public async ngOnInit(): Promise<void> {
    this.urlTaskId = this.route.snapshot.params["id"];
    const existingItemInDB = await this.taskService.find(this.urlTaskId);

    if (existingItemInDB) {
      this.loadTaskIntoForms(existingItemInDB);
    } else {
      const newDummyTask = createNewExamTask(this.urlTaskId);
      this.loadTaskIntoForms(newDummyTask);
    }
  }

  public loadTaskIntoForms(examTask: ExamTask): ExamTask {
    this.controls.id.setValue(examTask.id);
    this.controls.question.setValue(examTask.question);
    this.controls.solution.setValue(examTask.solution);
    this.controls.metadataClass.setValue(
      examTask.metadata?.classLevel ? examTask.metadata?.classLevel : 1
    );
    this.controls.metadataSubject.setValue(
      examTask.metadata?.subject ? examTask.metadata?.subject : 0
    );
    return examTask;
  }

  public async saveTask(): Promise<void> {
    const isUpdateCase = await this.taskService.find(this.urlTaskId);
    const newTask = this.serializeFormToExamTask();
    if (isUpdateCase) {
      await this.taskService.update(newTask);
    } else {
      await this.taskService.create(newTask);
    }

    await this.router.navigate(["tasks"]);
  }

  public async abortTaskEdit(): Promise<void> {
    await this.router.navigate(["tasks"]);
  }

  private serializeFormToExamTask(): ExamTask {
    return {
      id: this.urlTaskId,
      question: this.controls.question.getRawValue() || "",
      solution: this.controls.solution.getRawValue() || "",
      metadata: {
        classLevel: this.controls.metadataClass.getRawValue() || 0,
        subject:
          this.controls.metadataSubject.getRawValue() || ExamTaskSubject.dummy,
      },
    };
  }

  private async itemExistsAlready(id: string): Promise<boolean> {
    const routeParamIsNewItem = this.route.snapshot.params["new"];
    const itemExistsInDB = (await this.taskService.find(id)) !== undefined;

    // const dbEntry = await this.loadTask(id);
    let isValid = false;
    if (itemExistsInDB && !routeParamIsNewItem) {
      isValid = true;
    }
    if (itemExistsInDB && !routeParamIsNewItem) {
      isValid = true;
    }

    return isValid;
  }
}
