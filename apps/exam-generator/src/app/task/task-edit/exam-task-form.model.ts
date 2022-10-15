import { FormArray, FormControl } from "@angular/forms";
import { ExamTask } from "../models/exam-task.model";
import { trySetFormControl } from "../../shared/utils";

export class ExamTaskForm {
  id = new FormControl();

  metadataClassLevel = new FormControl();
  metadataSubject = new FormControl();
  metadataTags = new FormControl();

  contextDescription = new FormControl();
  contextImage = new FormControl();

  subtasks = new FormArray<any>([]);

  constructor(team: ExamTask) {
    trySetFormControl(this.id, team?.id);
    trySetFormControl(this.metadataClassLevel, team?.metadata?.classLevel);
    trySetFormControl(this.metadataSubject, team?.metadata?.subject);
    trySetFormControl(this.metadataTags, team?.metadata?.tags);

    trySetFormControl(this.contextDescription, team?.context?.description);
    trySetFormControl(this.contextImage, team?.context?.image);

    trySetFormControl(this.subtasks, team?.subtasks);
  }
}
