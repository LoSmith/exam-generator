import { FormControl } from "@angular/forms";
import { ExamSubTask } from "./exam-sub-task.model";

export class ExamSubTaskForm {
  question = new FormControl();
  solution = new FormControl();

  constructor(subtask: ExamSubTask) {
    this.question.setValue(subtask.question);
    this.solution.setValue(subtask.solution);
  }
}
