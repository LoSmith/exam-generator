import { FormControl } from "@angular/forms";
import { ExamSubTask } from "../../models/exam-sub-task.model";

export class ExamSubTaskForm {
  question: FormControl<string>;
  solution: FormControl<string>;

  constructor(subtask: ExamSubTask) {
    this.question = new FormControl();
    this.solution = new FormControl();

    if (subtask.question) {
      this.question.setValue(subtask.question);
    }
    if (subtask.solution) {
      this.solution.setValue(subtask.solution);
    }
  }
}
