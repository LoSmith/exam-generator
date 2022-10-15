import { ExamTask, ExamTaskSubject } from "./exam-task.model";
import { v4 as uuidv4 } from "uuid";
import { ExamSubTask } from "./exam-sub-task.model";

export const DEFAULT_EXAM_TASK: ExamTask = {
  id: "",
  metadata: {
    classLevel: 0,
    subject: ExamTaskSubject.none,
    tags: [],
  },
  context: {
    description: "",
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

export function createNewEmptyExamSubTask(): ExamSubTask {
  return {
    question: "",
    solution: "",
  };
}

const createSubTasks = (numberOfSubtasks: number): ExamSubTask[] => {
  const result: ExamSubTask[] = [];
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
      description: "context-dummy-text",
      image: "some-image-encoded",
    },
    subtasks: createSubTasks(subTaskNumber),
  };
}
