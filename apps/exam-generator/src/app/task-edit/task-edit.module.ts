import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskEditComponent } from "./task-edit.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [TaskEditComponent],
  imports: [CommonModule, CardModule, InputTextModule, ReactiveFormsModule, ButtonModule],
})
export class TaskEditModule {}
