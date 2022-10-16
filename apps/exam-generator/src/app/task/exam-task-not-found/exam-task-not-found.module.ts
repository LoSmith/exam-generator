import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExamTaskNotFoundComponent } from "./exam-task-not-found.component";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { RippleModule } from "primeng/ripple";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [ExamTaskNotFoundComponent],
  imports: [CommonModule, ButtonModule, CardModule, RippleModule, SharedModule],
})
export class ExamTaskNotFoundModule {}
