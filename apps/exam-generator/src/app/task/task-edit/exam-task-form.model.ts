import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ExamTask } from "../models/exam-task.model";
import { trySetFormValue } from "../../shared/utils";
import { EMPTY_EXAM_TASK } from "../models/default-exam-task";
import { ExamSubTaskForm } from "./exam-sub-task/exam-sub-task-form.model";

export class ExamTaskForm {
  id = new FormControl();
  metadataClassLevel = new FormControl();
  metadataSubject = new FormControl();
  metadataTags = new FormControl();
  contextDescription = new FormControl();
  contextImage = new FormControl();
  subtasks = new FormArray<FormGroup<ExamSubTaskForm>>([]);

  constructor(team: ExamTask = EMPTY_EXAM_TASK) {
    trySetFormValue(this.id, team.id, "id");
    trySetFormValue(
      this.metadataClassLevel,
      team.metadata.classLevel,
      "metadataClassLevel"
    );
    trySetFormValue(
      this.metadataSubject,
      team.metadata.subject,
      "metadataSubject"
    );
    trySetFormValue(this.metadataTags, team.metadata.tags, "metadataTags");

    trySetFormValue(
      this.contextDescription,
      team.context.description,
      "contextDescription"
    );
    trySetFormValue(this.contextImage, team.context.image, "contextImage");

    trySetFormValue(this.subtasks, team.subtasks, "subtasks");
  }
}
