import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskListComponent } from "./task-list.component";
import { RouterModule, Routes } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Task-List",
      urls: [{ title: "Task-List", url: "/task-list" }, { title: "Task-List" }],
    },
    component: TaskListComponent,
  },
];

@NgModule({
  imports: [TableModule, ButtonModule, CommonModule, SharedModule],
  declarations: [TaskListComponent],
})
export class TaskListModule {}
