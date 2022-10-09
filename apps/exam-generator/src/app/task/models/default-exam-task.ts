import { ExamTask, ExamTaskSubject } from "./exam-task.model";
import { v4 as uuidv4 } from "uuid";

export const DEFAULT_EXAM_TASK: ExamTask = {
  id: "",
  question: "",
  solution: "",
  metadata: {
    classLevel: 1,
    subject: ExamTaskSubject.dummy,
  },
};

export function createNewExamTask(): ExamTask {
  return {
    ...DEFAULT_EXAM_TASK,
    id: uuidv4(),
  };
}
