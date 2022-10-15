// import { Injectable } from "@angular/core";
// import { BehaviorSubject, Observable } from "rxjs";
// import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
// import { ExamTaskForm } from "./exam-task-form.model";
// import { createNewEmptyExamSubTask, createNewEmptyExamTask } from "../models/default-exam-task";
// import { ExamSubTaskForm } from "./exam-sub-task/exam-sub-task-form.model";
//
// @Injectable()
// export class TaskEditFormService {
//   private examTaskForm: BehaviorSubject<FormGroup> =
//     new BehaviorSubject<FormGroup>(this.fb.group(new ExamTaskForm(createNewEmptyExamTask())));
//   examTaskForm$: Observable<FormGroup<ExamTaskForm>> = this.examTaskForm.asObservable();
//
//   constructor(private fb: FormBuilder) {}
//
//   addSubtask() {
//     const currentExamTask = this.examTaskForm.getValue();
//     if (currentExamTask) {
//       const currentPlayers = currentExamTask.get("subtasks") as FormArray;
//       currentPlayers.push(
//         this.fb.group(new ExamSubTaskForm(createNewEmptyExamSubTask()))
//       );
//       this.examTaskForm.next(currentExamTask);
//     }
//   }
//
//   deleteSubtask(i: number) {
//     const currentExamTask = this.examTaskForm.getValue();
//     if (currentExamTask) {
//       const currentSubtasks = currentExamTask.get("subtasks") as FormArray;
//       currentSubtasks.removeAt(i);
//       this.examTaskForm.next(currentExamTask);
//     }
//   }
// }
