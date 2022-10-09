import { ExamTask, ExamTaskSubject } from "./exam-task.model";
import { v4 as uuidv4 } from "uuid";

export const DEFAULT_EXAM_TASK: ExamTask = {
  id: "",
  question: "default",
  solution: "default",
  metadata: {
    classLevel: 13,
    subject: ExamTaskSubject.dummy,
  },
};

export function createNewExamTask(id: string = uuidv4()): ExamTask {
  return {
    ...DEFAULT_EXAM_TASK,
    id
  };
}
