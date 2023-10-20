import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  firestoreCollection : AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection = firestore.collection('todos');
  }
  addTodo(title : String){
    this.firestoreCollection.add({
      title,
      isDone : false
    })
  }
}
