import { ExamTask, ExamTaskSubject, SubExamTask } from "./exam-task.model";
import { v4 as uuidv4 } from "uuid";

export const DEFAULT_EXAM_TASK: ExamTask = {
  id: "",
  metadata: {
    classLevel: 0,
    subject: ExamTaskSubject.notSet,
  },
  context: {
    text: "",
    image: "",
  },
  subtasks: [],
};

export function createNewEmptyExamTask(id: string = uuidv4()): ExamTask {
  return {
    ...DEFAULT_EXAM_TASK,
    id: id,
  };
}

const createSubTasks = (numberOfSubtasks: number): SubExamTask[] => {
  const result: SubExamTask[] = [];
  for (let i = 0; i < numberOfSubtasks; i++) {
    result.push({
      question: `subtask-${i}-question`,
      solution: `subtask-${i}-solution`,
    });
  }
  return result;
};

export function createExampleExamTask(subTaskNumber: number): ExamTask {
  return {
    ...DEFAULT_EXAM_TASK,
    id: uuidv4(),
    context: {
      text: "context-dummy-text",
      image: "some-image-encoded",
    },
    subtasks: createSubTasks(subTaskNumber),
  };
}
