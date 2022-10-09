import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskListComponent } from "./task-list.component";
import { RouterModule } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

import { SharedModule } from "../../shared/shared.module";
import { TaskService } from "../task.service";

@NgModule({
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [TaskService],
  declarations: [TaskListComponent],
})
export class TaskListModule {}
