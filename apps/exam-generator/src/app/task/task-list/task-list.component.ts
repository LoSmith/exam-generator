import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ExamTask } from "../models/exam-task.model";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent {
  public taskList: ExamTask[] = [];

  public constructor(public router: Router, public taskService: TaskService) {
  }

  public async ngOnInit(): Promise<void> {
    this.taskList = await this.taskService.findAll();
  }

  public async openDetailView(task: ExamTask): Promise<void> {
    await this.router.navigate([`tasks/${task.id}/edit`], {});
  }
}
