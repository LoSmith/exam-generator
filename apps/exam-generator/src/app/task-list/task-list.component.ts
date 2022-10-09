import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ExamTask } from "../shared/task/models/exam-task.model";
import { TaskService } from "../shared/task/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent {
  public taskList: ExamTask[] = [];

  public constructor(public router: Router, private taskService: TaskService) {
  }

  public async ngOnInit(): Promise<void> {
    this.taskList = await this.taskService.findAll();
  }

  public async openDetailView(task: ExamTask): Promise<void> {
    console.log("hallowelt" + task.id);
    await this.router.navigate([`tasks/${task.id}/edit`], {});
  }
}
