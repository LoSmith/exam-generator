export enum ExamTaskSubject {
  notSet,
  math,
  english,
  german,
  it,
  biology,
}

export interface SubExamTask {
  question: string;
  solution: string;
}

export interface ExamTask {
  id: string;
  metadata: {
    classLevel?: number;
    subject?: ExamTaskSubject;
  };
  context: {
    text?: string;
    image?: string;
  };
  subtasks: SubExamTask[];
}
