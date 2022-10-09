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
  public controls = {
    id: new FormControl(""),
    question: new FormControl(""),
    solution: new FormControl(""),
    metadataClass: new FormControl(0),
    metadataSubject: new FormControl(ExamTaskSubject.biology),
  };

  public loadedTask!: ExamTask;
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
    const taskId = this.route.snapshot.params["id"];

    if (await this.isTaskIdValid(taskId)) {
      this.loadedTask = await this.loadTask(taskId);

      // TODO: hier weitermachen... wenn task valid, dann laden.
      this.controls.id.setValue(this.loadedTask.id);
      this.controls.question.setValue(this.loadedTask.question);
      this.controls.solution.setValue(this.loadedTask.solution);
      this.controls.metadataClass.setValue(
        this.loadedTask.metadata?.classLevel
          ? this.loadedTask.metadata?.classLevel
          : 0
      );
      this.controls.metadataSubject.setValue(
        this.loadedTask.metadata?.subject
          ? this.loadedTask.metadata?.subject
          : ExamTaskSubject.biology
      );
    } else {
      await this.router.navigate(["exam-task-not-found"]);
    }
  }

  public async loadTask(taskId: string): Promise<ExamTask> {
    let task = await this.taskService.find(taskId);
    if (!task) {
      //TODO info there is no task wit this id yet
      task = createNewExamTask();
    }
    return task;
  }

  public async saveTask(): Promise<void> {
    console.log(this.form.getRawValue());

    const previousTask = await this.taskService.find(this.loadedTask.id);
    const newTask = this.serializeFormToExamTask();
    if (previousTask) {
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
      id: this.loadedTask.id,
      question: this.controls.question.getRawValue() || "",
      solution: this.controls.solution.getRawValue() || "",
      metadata: {
        classLevel: this.controls.metadataClass.getRawValue() || 0,
        subject:
          this.controls.metadataSubject.getRawValue() || ExamTaskSubject.dummy,
      },
    };
  }

  private async isTaskIdValid(id: string): Promise<boolean> {
    const routeParamIsNewItem = this.route.snapshot.params["new"];
    const dbEntry = await this.loadTask(id);

    let isValid = false;
    if (!dbEntry && routeParamIsNewItem) {
      isValid = true;
    }
    if (dbEntry && !routeParamIsNewItem) {
      isValid = true;
    }

    return isValid;
  }
}
