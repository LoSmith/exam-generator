import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Firestore } from "@angular/fire/firestore";
import { doc, getDocs, setDoc, deleteDoc } from "@firebase/firestore";

import { ExamTask } from "./models/exam-task.model";
import { createCollection } from "../shared/firestore-utils";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private collectionPath = "tasks";
  tasksCol = createCollection<ExamTask>(this.firestore, this.collectionPath);

  constructor(private http: HttpClient, private firestore: Firestore) {}

  public async create(data: ExamTask): Promise<ExamTask> {
    await setDoc(doc(this.tasksCol, data.id), data);
    return data;
  }

  public async findAll(): Promise<ExamTask[]> {
    const tasksDocs = await getDocs(this.tasksCol);
    return tasksDocs.docs.map((taskDoc) => taskDoc.data());
  }

  public async find(id: string): Promise<ExamTask | undefined> {
    const tasksDocs = await getDocs(this.tasksCol);
    return tasksDocs.docs.find((taskDoc) => taskDoc.data().id === id)?.data();
  }

  public async update(data: ExamTask): Promise<ExamTask | undefined> {
    const targetItem = await this.find(data.id);
    if (!targetItem) {
      return undefined;
    }

    await setDoc(doc(this.tasksCol, data.id), data);
    return data;
  }

  public async delete(id: string): Promise<ExamTask | undefined> {
    const targetItem: ExamTask | undefined = await this.find(id);
    if (!targetItem) {
      return undefined;
    }
    await deleteDoc(doc(this.tasksCol, id));
    return targetItem;
  }
}
