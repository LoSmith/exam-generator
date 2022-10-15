import { ExamSubTask } from "../exam-sub-task";

export class ExamTask {
  id: string;
  subtasks: ExamSubTask[];

  constructor(id: string, subtasks: ExamSubTask[] = []) {
    this.id = id;
    this.subtasks = subtasks;
  }
}
