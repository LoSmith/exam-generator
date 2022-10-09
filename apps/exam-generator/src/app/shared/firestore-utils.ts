// This is just a helper to add the type to the db responses
import { collection, CollectionReference, DocumentData, Firestore } from "@angular/fire/firestore";

export const createCollection = <T = DocumentData>(firestoreInstance: Firestore, collectionName: string) => {
  return collection(firestoreInstance, collectionName) as CollectionReference<T>;
};
