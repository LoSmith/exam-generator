import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { TaskEditFormService } from "./task-edit-form.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit, OnDestroy {
  examTaskForm!: FormGroup;
  examTaskFormSub!: Subscription;
  subtasks!: FormArray;

  constructor(private teamFormService: TaskEditFormService, private router: Router) {}

  ngOnInit() {
    this.examTaskFormSub = this.teamFormService.examTaskForm$.subscribe(
      (examTask) => {
        this.examTaskForm = examTask;
        this.subtasks = this.examTaskForm.get("subtasks") as FormArray;
      }
    );
  }

  ngOnDestroy() {
    this.examTaskFormSub?.unsubscribe();
  }

  addSubtask() {
    this.teamFormService?.addSubtask();
  }

  deleteSubtask(index: number) {
    this.teamFormService?.deleteSubtask(index);
  }

  saveExamTask() {
    console.log("team saved!");
    console.log(this.examTaskForm?.value);
  }

  async abortTaskEdit() {
    await this.router.navigate(["tasks"]);
  }
}
