import { Component, OnInit } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { ExamService } from "../exam.service";
import { Exam } from "../models/exam-task.model";

@Component({
  selector: "app-exam-list",
  templateUrl: "./exam-list.component.html",
})
export class ExamListComponent implements OnInit {
  public examList: Exam[] = [];

  public constructor(
    public router: Router,
    public examService: ExamService,
    private confirmationService: ConfirmationService
  ) {}

  public async ngOnInit(): Promise<void> {
    await this.loadExams();
  }

  public async createNewExam(): Promise<void> {
    this.router.navigate([`exams/${uuidv4()}/edit`], {
      queryParams: {
        isNewItem: true,
      },
    });
  }

  public async editExam(task: Exam): Promise<void> {
    await this.router.navigate([`tasks/${task.id}/edit`]);
  }

  public async deleteTask(event: Event, task: Exam) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message:
        "Are you sure you want to delete this exam? Removed items can't be restored.",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await this.examService.delete(task.id);
        await this.loadExams();
      },
      reject: () => {
        //reject action
      },
    });
  }

  private async loadExams() {
    this.examList = await this.examService.findAll();
  }
}
