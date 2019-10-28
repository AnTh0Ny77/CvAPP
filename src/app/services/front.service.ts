import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  constructor(private FireStore: AngularFirestore) { }
  getFront() { 
    return this.FireStore.collection("Front").snapshotChanges();
    ;
    
  }
}
