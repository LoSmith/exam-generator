import { FormControl } from "@angular/forms";
import { Exam } from "../models/exam-task.model";
import { trySetFormValue } from "../../shared/utils";
import { EMPTY_EXAM } from "../models/default-exam";

export class ExamForm {
  id = new FormControl();
  title = new FormControl();
  metadataClassLevel = new FormControl();
  metadataSubject = new FormControl();
  metadataTags = new FormControl();
  contextDescription = new FormControl();
  contextImage = new FormControl();
  examTasks = new FormControl();

  constructor(task: Exam = EMPTY_EXAM) {
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

    trySetFormValue(this.examTasks, task.examTasks, "examtasks");
  }
}
