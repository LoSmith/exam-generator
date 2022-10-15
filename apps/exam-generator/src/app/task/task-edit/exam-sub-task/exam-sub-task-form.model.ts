import { FormControl } from "@angular/forms";
import { ExamSubTask } from "../../models/exam-sub-task.model";
import { trySetFormValue } from "../../../shared/utils";
import { EMPTY_EXAM_SUB_TASK } from "../../models/default-exam-task";

export class ExamSubTaskForm {
  question: FormControl = new FormControl();
  solution: FormControl = new FormControl();

  constructor(subtask: ExamSubTask = EMPTY_EXAM_SUB_TASK) {
    trySetFormValue(this.question, subtask?.question, "question");
    trySetFormValue(this.solution, subtask?.solution, "solution");
  }
}
