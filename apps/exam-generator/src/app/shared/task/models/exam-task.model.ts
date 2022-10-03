export enum ExamTaskSubject {
  math,
  english,
  german,
  it,
  biology,
}

export interface ExamTask {
  id: string;
  titel: string;
  metadata?: {
    class: number;
    subject: ExamTaskSubject;
  };
}
