import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListModule } from "./task-list/task-list.module";
import { TaskEditModule } from "./task-edit/task-edit.module";
import { TaskService } from "./task.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskListModule,
    TaskEditModule
  ],
  providers: [TaskService]
})
export class TaskModule { }
