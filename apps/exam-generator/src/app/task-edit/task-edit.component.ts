import { Component, OnInit } from "@angular/core";
import {
  ExamTask,
  ExamTaskSubject,
} from "../shared/task/models/exam-task.model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

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
  private form: FormGroup;

  constructor(private fb: FormBuilder, public route: ActivatedRoute) {
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
        class: 0,
        subject: ExamTaskSubject.biology,
      },
    };
  }

  public saveTask(): void {
    console.log(this.form.getRawValue());
  }
}
