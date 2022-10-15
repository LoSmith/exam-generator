import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskEditComponent } from "./task-edit.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TaskEditFormService } from "./task-edit-form.service";
import { ExamSubTaskComponent } from "./player/exam-sub-task.component";

@NgModule({
  declarations: [TaskEditComponent, ExamSubTaskComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  providers: [TaskEditFormService],
})
export class TaskEditModule {}
