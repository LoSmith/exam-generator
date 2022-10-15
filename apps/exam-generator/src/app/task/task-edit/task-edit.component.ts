import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { TaskEditFormService } from "./task-edit-form.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit, OnDestroy {
  examTaskForm!: FormGroup;
  examTaskFormSub!: Subscription;
  subtasks!: FormArray;

  constructor(
    private teamFormService: TaskEditFormService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.examTaskFormSub = this.teamFormService.examTaskForm$.subscribe(
      (examTask) => {
        this.examTaskForm = examTask;
        this.subtasks = this.examTaskForm.get("subtasks") as FormArray;
      }
    );

    this.examTaskForm.reset();
    this.subtasks.clear();
  }

  ngOnDestroy() {
    this.examTaskFormSub.unsubscribe();
  }

  addSubtask() {
    this.teamFormService.addSubtask();
  }

  deleteSubtask(index: number) {
    this.teamFormService.deleteSubtask(index);
  }

  saveExamTask() {
    console.log("team saved!");
    console.log(this.examTaskForm.value);
  }

  async abortTaskEdit(event: Event) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: "Are you sure you want to exit the task editor? All changes will be lost on abort.",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await this.router.navigate(["tasks"]);
      },
      reject: () => {
        //reject action
      },
    });
  }
}
