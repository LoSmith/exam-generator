import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListModule } from "./task-list/task-list.module";
import { TaskEditModule } from "./task-edit/task-edit.module";
import { TaskService } from "./task.service";
import { ExamTaskNotFoundModule } from "./exam-task-not-found/exam-task-not-found.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskListModule,
    TaskEditModule,
    ExamTaskNotFoundModule
  ],
  providers: [TaskService]
})
export class TaskModule { }
