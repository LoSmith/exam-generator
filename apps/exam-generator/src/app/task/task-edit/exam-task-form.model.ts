import { FormArray, FormControl } from "@angular/forms";
import { ExamTask } from "../models/exam-task.model";

export class ExamTaskForm {
  id = new FormControl();
  subtasks = new FormArray<any>([]);

  constructor(team: ExamTask) {
    if (team.id) {
      this.id.setValue(team.id);
    }

    if (team.subtasks) {
      this.subtasks.setValue(team.subtasks);
    }
  }
}
