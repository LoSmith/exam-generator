import { FormControl } from "@angular/forms";
import { ExamSubTask } from "../../models/exam-sub-task.model";
import { trySetFormControl } from "../../../shared/utils";

export class ExamSubTaskForm {
  question: FormControl<string>;
  solution: FormControl<string>;

  constructor(subtask: ExamSubTask) {
    this.question = new FormControl();
    this.solution = new FormControl();

    trySetFormControl(this.question, subtask?.question);
    trySetFormControl(this.solution, subtask?.solution);
  }
}
