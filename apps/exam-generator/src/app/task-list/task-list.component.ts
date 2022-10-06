import { Component, OnInit } from "@angular/core";
import { ExamTask } from "../shared/task/models/exam-task.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent implements OnInit {
  constructor(public router: Router) {}

  public taskList: ExamTask[] = [];

  ngOnInit(): void {
    const dummyTask: ExamTask = {
      id: "somid",
      question: "the titel of the task",
      solution: ""
    };
    const numberNewElements = 20;
    this.taskList = [...new Array(numberNewElements).fill(dummyTask)];
  }

  public async openDetailView(task: ExamTask): Promise<void> {
    console.log("hallowelt" + task.id);
    await this.router.navigate([`tasks/${task.id}/edit`], {});
  }
}
