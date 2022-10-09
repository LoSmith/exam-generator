// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from "rxjs";
//
// import { ExamTask } from "./shared/task/models/exam-task.model";
// import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
//
// @Injectable({
//   providedIn: "root",
// })
// export class TaskService {
//   private dbPath = "/examManager/tasks";
//   private taskDoc: AngularFirestoreDocument<ExamTask[]>;
//
//   constructor(private http: HttpClient, private db: AngularFirestore) {
//     this.taskDoc = db.doc<ExamTask[]>(this.dbPath);
//   }
//
//   getAll(): Observable<ExamTask[] | undefined> {
//     return this.taskDoc.valueChanges();
//   }
//
//   // find(id: string): Observable<ExamTask | undefined> {
//   //   return this.taskDoc.valueChanges().pipe(
//   //     map
//   //   );
//   // }
//
//   public async create(data: ExamTask): Promise<void> {
//     return await this.taskDoc.set([data]);
//   }
//
//   // update(data: ExamTask, id: string): Observable<ExamTask> {
//   //   return this.http.patch<ExamTask>(`${this.baseURL}/update/${id}`, data);
//   // }
//   //
//   // delete(id: string): Observable<ExamTask> {
//   //   return this.http.delete<ExamTask>(`${this.baseURL}/delete/${id}`);
//   // }
// }
