import { ExamSubTask } from "./exam-sub-task.model";

export class ExamTask {
  id: string;
  metadata: ExamTaskMetadata;
  context: ExamTaskContext;
  subtasks: ExamSubTask[];

  constructor(
    id: string,
    metadata: ExamTaskMetadata,
    context: ExamTaskContext,
    subtasks: ExamSubTask[] = [],
  ) {
    this.id = id;
    this.metadata = metadata;
    this.context = context;
    this.subtasks = subtasks;
  }
}

export enum ExamTaskSubject {
  none= "none",
  math= "math",
  english= "english",
  german= "german",
  it= "it",
  biology= "biology",
  esTut= "esTut"
}

export interface ExamTaskContext {
  description: string;
  image: string;
}

export interface ExamTaskMetadata {
  classLevel: number;
  subject: ExamTaskSubject;
  tags: string[];
}
