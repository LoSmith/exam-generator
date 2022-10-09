import { Component } from "@angular/core";
import { ExamTask } from "../shared/task/models/exam-task.model";
import { Router } from "@angular/router";
import {  } from '@angular/fire';
import { collection, Firestore, getDocs } from "@angular/fire/firestore";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent {
  public taskList: ExamTask[] = [];

  public constructor(public router: Router, private firestore: Firestore) {}

  public async ngOnInit(): Promise<void> {
    const tasksCol = collection(this.firestore, "tasks");
    const tasksSnapshot = await getDocs(tasksCol);
    const tasks = tasksSnapshot.docs.map<ExamTask>(doc => doc.data() as ExamTask);
    this.taskList = tasks;
  }


  public async openDetailView(task: ExamTask): Promise<void> {
    console.log("hallowelt" + task.id);
    await this.router.navigate([`tasks/${task.id}/edit`], {});
  }
}
