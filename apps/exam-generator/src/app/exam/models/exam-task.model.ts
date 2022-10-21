import { Metadata } from "../../shared/models/metadata.model";

export class Exam {
  id: string;
  title: string;
  metadata: Metadata;
  examTasks: Exam[];

  constructor(
    id: string,
    title: string,
    metadata: Metadata,
    examTasks: Exam[],
  ) {
    this.id = id;
    this.title = title;
    this.metadata = metadata;
    this.examTasks = examTasks;
  }
}
