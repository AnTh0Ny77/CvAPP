import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private FireStore: AngularFirestore) { 
  }
  getTime() { 
    return this.FireStore.collection("timeline").snapshotChanges();
    ;
    
  }
}
