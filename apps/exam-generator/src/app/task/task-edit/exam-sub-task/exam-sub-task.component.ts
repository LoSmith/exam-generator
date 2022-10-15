import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-exam-sub-task[index][subTaskForm]",
  templateUrl: "./exam-sub-task.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamSubTaskComponent {
  @Input() subTaskForm!: FormGroup;
  @Input() index!: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  deleteSubTask() {
    this.delete.emit(this.index);
  }
}
