import { Component, OnInit } from "@angular/core";
import { ExamTask } from "../shared/task/models/exam-task.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {

  constructor(public router: Router){
  }

  public taskList: ExamTask[] = [];

  ngOnInit(): void {
    const dummyTask: ExamTask = {
      id: "somid",
      titel: "the titel of the task",
    };
    this.taskList = [...new Array(20).fill(dummyTask)];
  }

  openDetailView(task: ExamTask) {
    console.log('hallowelt'+ task.id);
    this.router.navigate([`task-edit/${task.id}`]);
  }
}
