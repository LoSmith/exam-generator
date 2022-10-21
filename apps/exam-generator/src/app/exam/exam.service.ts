import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Firestore } from "@angular/fire/firestore";
import { doc, getDocs, setDoc, deleteDoc } from "@firebase/firestore";

import { createCollection } from "../shared/firestore-utils";
import { Exam } from "./models/exam-task.model";

@Injectable({
  providedIn: "root",
})
export class ExamService {
  private collectionPath = "exams";
  examsCol = createCollection<Exam>(this.firestore, this.collectionPath);

  constructor(private http: HttpClient, private firestore: Firestore) {}

  public async create(data: Exam): Promise<Exam> {
    await setDoc(doc(this.examsCol, data.id), data);
    return data;
  }

  public async findAll(): Promise<Exam[]> {
    const tasksDocs = await getDocs(this.examsCol);
    return tasksDocs.docs.map((dataDoc) => dataDoc.data());
  }

  public async find(id: string): Promise<Exam | undefined> {
    const dataDocs = await getDocs(this.examsCol);
    return dataDocs.docs.find((dataDoc) => dataDoc.data().id === id)?.data();
  }

  public async update(data: Exam): Promise<Exam | undefined> {
    const targetItem = await this.find(data.id);
    if (!targetItem) {
      return undefined;
    }

    await setDoc(doc(this.examsCol, data.id), data);
    return data;
  }

  public async delete(id: string): Promise<Exam | undefined> {
    const targetItem: Exam | undefined = await this.find(id);
    if (!targetItem) {
      return undefined;
    }
    await deleteDoc(doc(this.examsCol, id));
    return targetItem;
  }
}
