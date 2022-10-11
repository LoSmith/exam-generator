import { Component, OnInit } from "@angular/core";
import { ExamTask, ExamTaskSubject } from "../models/exam-task.model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { getKeysFromEnum } from "../../shared/utils";
import { TaskService } from "../task.service";
import { createExampleExamTask, createNewEmptyExamTask } from "../models/default-exam-task";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
})
export class TaskEditComponent implements OnInit {

  public urlTaskId = "";
  public controls = {
    id: new FormControl(""),
    question: new FormControl(""),
    solution: new FormControl(""),
    metadataClass: new FormControl(1),
    metadataSubject: new FormControl(ExamTaskSubject.biology),
    contextText: new FormControl(""),
    contextImage: new FormControl(""),
  };

  public baseTaskForm: FormGroup;

  public examTaskSubjectOptions: string[] = getKeysFromEnum(ExamTaskSubject);
  public examTaskClassLevelOptions: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public taskService: TaskService
  ) {
    this.baseTaskForm = fb.group(this.controls);
  }

  public async ngOnInit(): Promise<void> {
    this.urlTaskId = this.route.snapshot.params["id"];
    // const itemInDb = await this.taskService.find(this.urlTaskId);
    const itemInDb = createExampleExamTask(4);

    if (itemInDb) {
      this.loadTaskIntoForms(itemInDb);
    } else {
      const newExamTask = createNewEmptyExamTask(this.urlTaskId);
      this.loadTaskIntoForms(newExamTask);
    }
  }

  public loadTaskIntoForms(examTask: ExamTask): ExamTask {
    this.controls.id.setValue(examTask.id);
    this.controls.metadataClass.setValue(
      examTask.metadata?.classLevel ? examTask.metadata?.classLevel : 1
    );
    this.controls.metadataSubject.setValue(
      examTask.metadata?.subject ? examTask.metadata?.subject : 0
    );

    return examTask;
  }

  public async saveTask(): Promise<void> {
    const isUpdateCase = await this.taskService.find(this.urlTaskId);
    const newTask = this.serializeFormToExamTask();
    if (isUpdateCase) {
      await this.taskService.update(newTask);
    } else {
      await this.taskService.create(newTask);
    }

    await this.router.navigate(["tasks"]);
  }

  public async abortTaskEdit(): Promise<void> {
    await this.router.navigate(["tasks"]);
  }

  private serializeFormToExamTask(): ExamTask {
    return {
      id: this.urlTaskId,
      metadata: {
        classLevel: this.controls.metadataClass.getRawValue() || 0,
        subject:
          this.controls.metadataSubject.getRawValue() || ExamTaskSubject.dummy,
      },
      context: {
        text: "",
        image: "",
      },
      subtasks: [
        {
          question: this.controls.question.getRawValue() || "",
          solution: this.controls.solution.getRawValue() || "",
        },
      ],
    };
  }
}
