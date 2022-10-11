import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-sub-task-edit[parentFormGroup]",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"],
})
export class SubTaskEditComponent implements OnInit {
  @Input() parentFormGroup!: FormGroup;

  public controls = {
    subtaskId: new FormControl(""),
    question: new FormControl(""),
    solution: new FormControl(""),
  };

  constructor(private fb: FormBuilder) {}

  public get isValid(): boolean {
    return (
      this.controls.subtaskId.valid &&
      this.controls.question.valid &&
      this.controls.solution.valid
    );
  }

  public get isDirty(): boolean {
    return (
      this.controls.subtaskId.dirty ||
      this.controls.question.dirty ||
      this.controls.solution.dirty
    );
  }

  public ngOnInit(): void {
    this.parentFormGroup.addControl(
      "sub-task",
      this.fb.group({
        street: ["", Validators.required],
        city: [""],
        state: [""],
        zip: [""],
      })
    );
  }
}
