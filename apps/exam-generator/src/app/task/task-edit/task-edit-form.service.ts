import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { ExamTask, ExamTaskForm } from "./models";
import { ExamSubTask, ExamSubTaskForm } from "./player";

@Injectable()
export class TaskEditFormService {
  private examTaskForm: BehaviorSubject<FormGroup> =
    new BehaviorSubject<FormGroup>(
      this.fb.group(new ExamTaskForm(new ExamTask("BLUB")))
    );
  examTaskForm$: Observable<FormGroup> = this.examTaskForm.asObservable();

  constructor(private fb: FormBuilder) {
  }

  addSubtask() {
    const currentExamTask = this.examTaskForm.getValue();
    if (currentExamTask) {
      const currentPlayers = currentExamTask.get("subtasks") as FormArray;
      currentPlayers.push(
        this.fb.group(new ExamSubTaskForm(new ExamSubTask("", "")))
      );
      this.examTaskForm.next(currentExamTask);
    }
  }

  deleteSubtask(i: number) {
    const currentExamTask = this.examTaskForm.getValue();
    if (currentExamTask) {
      const currentSubtasks = currentExamTask.get("subtasks") as FormArray;
      currentSubtasks.removeAt(i);
      this.examTaskForm.next(currentExamTask);
    }
  }
}
