import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-exam-sub-task[index][subTaskForm]",
  templateUrl: "./exam-sub-task.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamSubTaskComponent {
  @Input() subTaskForm!: FormGroup;
  @Input() index!: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor(private confirmationService: ConfirmationService) {}


  deleteSubTask(event: Event) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: "Are you sure you want to delete the subtask?",
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete.emit(this.index);
      },
      reject: () => {
        //reject action
      }
    });
  }
}
