import { v4 as uuidv4 } from "uuid";
import { Exam } from "./exam-task.model";
import { ClassSubject } from "../../shared/models/subject.model";

export const EMPTY_EXAM: Exam = {
  id: "",
  title: "",
  metadata: {
    classLevel: 1,
    subject: ClassSubject.none,
    tags: [],
  },
  examTasks: [],
};

export function createNewEmptyExamTask(id: string = uuidv4()): Exam {
  return {
    ...EMPTY_EXAM,
    id: id,
  };
}

export function createExampleExamTask(id: string = uuidv4()): Exam {
  return {
    ...EMPTY_EXAM,
    id,
    title: "ExampleExam",
    metadata: {
      classLevel: 13,
      subject: ClassSubject.none,
      tags: ["123"],
    },
    examTasks: [],
  };
}
