import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskEditComponent } from "./task-edit.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TaskEditComponent],
  imports: [CommonModule, CardModule, InputTextModule, ReactiveFormsModule],
})
export class TaskEditModule {}
