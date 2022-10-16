import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-exam-sub-task[index][subTaskForm]",
  templateUrl: "./exam-sub-task.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamSubTaskComponent {
  @Input() subTaskForm!: FormGroup;
  @Input() index!: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor(
    private confirmationService: ConfirmationService,
    private translationService: TranslateService
  ) {}

  deleteSubTask(event: Event) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: this.translationService.instant("taskEdit.subtasks.deleteItemConfirmationText"),
      icon: "pi pi-exclamation-triangle",
      acceptLabel: this.translationService.instant("app.yes"),
      rejectLabel: this.translationService.instant("app.no"),
      accept: () => {
        this.delete.emit(this.index);
      },
      reject: () => {
        //reject action
      },
    });
  }
}
