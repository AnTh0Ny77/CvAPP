import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class DynaProfilService {
  profil: any;
  constructor(private FireStore: AngularFirestore) { 
  }
  getProfile() { 
    return this.FireStore.collection("profile").snapshotChanges();
    ;
    
  }
}
