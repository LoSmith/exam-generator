import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskEditComponent } from "./task-edit.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TaskEditFormService } from "./task-edit-form.service";
import { ExamSubTaskComponent } from "./exam-sub-task/exam-sub-task.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipsModule } from "primeng/chips";
import { ImageModule } from "primeng/image";
import { RippleModule } from "primeng/ripple";

@NgModule({
  declarations: [TaskEditComponent, ExamSubTaskComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    AutoCompleteModule,
    ChipsModule,
    ImageModule,
    RippleModule,
  ],
  providers: [TaskEditFormService],
})
export class TaskEditModule {}
