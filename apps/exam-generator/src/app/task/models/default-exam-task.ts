import { ExamTask, ExamTaskSubject } from "./exam-task.model";
import { v4 as uuidv4 } from "uuid";
import { ExamSubTask } from "./exam-sub-task.model";

export const EMPTY_EXAM_TASK: ExamTask = {
  id: "",
  metadata: {
    classLevel: 1,
    subject: ExamTaskSubject.none,
    tags: [],
  },
  context: {
    description: "",
    image: "",
  },
  subtasks: [],
};

export const EMPTY_EXAM_SUB_TASK: ExamSubTask = {
  question: "",
  solution: "",
};

export function createNewEmptyExamTask(id: string = uuidv4()): ExamTask {
  return {
    ...EMPTY_EXAM_TASK,
    id: id,
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

export function createExampleExamTask(id: string = uuidv4(), subTaskNumber: number): ExamTask {
  return {
    ...EMPTY_EXAM_TASK,
    id,
    metadata: {
      classLevel: 13,
      subject: ExamTaskSubject.esTut,
      tags: ["123"],
    },
    context: {
      description: "description es tut",
      image: "image es tut",
    },
    subtasks: createSubTasks(subTaskNumber),
  };
}
