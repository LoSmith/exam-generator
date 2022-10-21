import { NgModule } from "@angular/core";
import { ExamListComponent } from "./exam-list.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { RippleModule } from "primeng/ripple";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ExamListComponent],
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    SharedModule,
    RouterModule,
    RippleModule,
    ConfirmPopupModule,
    TranslateModule,
  ],
})
export class ExamListModule {}
