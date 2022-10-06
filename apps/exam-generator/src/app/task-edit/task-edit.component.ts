import { Component, OnInit } from "@angular/core";
import {
  ExamTask,
  ExamTaskSubject,
} from "../shared/task/models/exam-task.model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit {
  public task!: ExamTask;

  public controls = {
    id: new FormControl(""),
    title: new FormControl(""),
    metaDataClass: new FormControl(""),
    metaDataSubject: new FormControl(""),
  };
  public url!: string;
  private form: FormGroup;

  constructor(private fb: FormBuilder, public route: ActivatedRoute) {
    this.form = fb.group(this.controls);
  }

  public async ngOnInit(): Promise<void> {
    const taskId = this.route.snapshot.params['id'];

    if (taskId) {
      this.task = await this.loadTask(taskId);
    }
  }

  public async loadTask(taskId: string): Promise<ExamTask> {
    return {
      id: taskId,
      question: "Titel",
      solution: "",
      metadata: {
        class: 0,
        subject: ExamTaskSubject.biology,
      },
    };
  }
}
