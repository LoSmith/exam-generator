import { Component, OnInit } from "@angular/core";
import {
  ExamTask,
  ExamTaskSubject,
} from "../shared/task/models/exam-task.model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { getKeysFromEnum } from "../utils";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit {
  public controls = {
    id: new FormControl(""),
    question: new FormControl(""),
    solution: new FormControl(""),
    metadataClass: new FormControl(""),
    metadataSubject: new FormControl(""),
  };

  public task!: ExamTask;
  form: FormGroup;
  public examTaskSubjectOptions: string[] = getKeysFromEnum(ExamTaskSubject);
  public examTaskClassLevelOptions: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
  ) {
    this.form = fb.group(this.controls);
  }

  public async ngOnInit(): Promise<void> {
    const taskId = this.route.snapshot.params["id"];

    if (taskId) {
      const loadedTask = await this.loadTask(taskId);
      this.task = loadedTask;
      this.controls.id.setValue(loadedTask.id);
      this.controls.question.setValue(loadedTask.question);
      this.controls.solution.setValue(loadedTask.solution);
    }
  }

  public async loadTask(taskId: string): Promise<ExamTask> {
    return {
      id: taskId,
      question: "question",
      solution: "solution",
      metadata: {
        classLevel: 0,
        subject: ExamTaskSubject.biology,
      },
    };
  }

  public async saveTask(): Promise<void> {
    console.log(this.form.getRawValue());
    await this.router.navigate(["tasks"]);
  }

  public async abortTaskEdit(): Promise<void> {
    await this.router.navigate(["tasks"]);
  }

  public async createTask() {
    const newTask: ExamTask = this.form.getRawValue();
    // await this.taskService.create(newTask);
  }
}
