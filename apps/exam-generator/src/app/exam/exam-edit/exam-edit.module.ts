import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExamEditComponent } from "./exam-edit.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ChipsModule } from "primeng/chips";
import { ImageModule } from "primeng/image";
import { RippleModule } from "primeng/ripple";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { EditorModule } from "primeng/editor";
import { DropdownModule } from "primeng/dropdown";
import { DragDropModule } from "primeng/dragdrop";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [ExamEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ChipsModule,
    ImageModule,
    RippleModule,
    ConfirmPopupModule,
    BrowserAnimationsModule,
    SharedModule,
    EditorModule,
    DropdownModule,
    DragDropModule,
    TableModule,
  ],
  providers: [ConfirmationService],
})
export class ExamEditModule {}
