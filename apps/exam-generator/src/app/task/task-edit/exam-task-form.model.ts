import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ExamTask } from "../models/exam-task.model";
import { trySetFormValue } from "../../shared/utils";
import { EMPTY_EXAM_TASK } from "../models/default-exam-task";
import { ExamSubTaskForm } from "./exam-sub-task/exam-sub-task-form.model";

export class ExamTaskForm {
  id = new FormControl();
  title = new FormControl();
  metadataClassLevel = new FormControl();
  metadataSubject = new FormControl();
  metadataTags = new FormControl();
  contextDescription = new FormControl();
  contextImage = new FormControl();
  subtasks = new FormArray<FormGroup<ExamSubTaskForm>>([]);

  constructor(task: ExamTask = EMPTY_EXAM_TASK) {
    trySetFormValue(this.id, task.id, "id");
    trySetFormValue(this.title, task.title, "title");
    trySetFormValue(
      this.metadataClassLevel,
      task.metadata.classLevel,
      "metadataClassLevel"
    );
    trySetFormValue(
      this.metadataSubject,
      task.metadata.subject,
      "metadataSubject"
    );
    trySetFormValue(this.metadataTags, task.metadata.tags, "metadataTags");

    trySetFormValue(
      this.contextDescription,
      task.context.description,
      "contextDescription"
    );
    trySetFormValue(this.contextImage, task.context.image, "contextImage");

    trySetFormValue(this.subtasks, task.subtasks, "subtasks");
  }
}
