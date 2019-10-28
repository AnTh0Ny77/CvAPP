import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private FireStore: AngularFirestore) { }
  getBack() { 
    return this.FireStore.collection("Back").snapshotChanges();
    ;
    
  }
}
