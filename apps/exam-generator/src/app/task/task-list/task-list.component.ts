import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ExamTask } from "../models/exam-task.model";
import { TaskService } from "../task.service";
import { v4 as uuidv4 } from "uuid";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent implements OnInit {
  public taskList: ExamTask[] = [];

  public constructor(
    public router: Router,
    public taskService: TaskService,
    private confirmationService: ConfirmationService
  ) {}

  public async ngOnInit(): Promise<void> {
    await this.loadTasks();
  }

  public async createNewTask(): Promise<void> {
    await this.router.navigate([`tasks/${uuidv4()}/edit`], {
      queryParams: {
        isNewItem: true,
      },
    });
  }

  public async editTask(task: ExamTask): Promise<void> {
    await this.router.navigate([`tasks/${task.id}/edit`]);
  }

  public async deleteTask(event: Event, task: ExamTask) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message:
        "Are you sure you want to delete this task? Removed items can't be restored.",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await this.taskService.delete(task.id);
        await this.loadTasks();
      },
      reject: () => {
        //reject action
      },
    });
  }

  private async loadTasks() {
    this.taskList = await this.taskService.findAll();
  }
}
