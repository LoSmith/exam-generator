import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-exam-task-not-found",
  templateUrl: "./exam-task-not-found.component.html"
})
export class ExamTaskNotFoundComponent {
  constructor(private router: Router) {
  }

  public async createNewTask() {
    const newId = uuidv4();
    await this.router.navigate([`tasks/${newId}/edit`], {
      queryParams: {
        isNewItem: true
      }
    });
  }

  public async gotoList() {
    await this.router.navigate([`tasks`]);
  }

}
