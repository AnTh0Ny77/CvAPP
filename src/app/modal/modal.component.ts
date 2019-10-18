import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { SendstatusService } from "../services/sendstatus.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor( private firestore: AngularFirestore, private status: SendstatusService ) { }
  ngOnInit() {
  }
  postdata(data){
    return this.firestore.collection('messages').add(data)
  }
  
  onSubmit(form: NgForm) {
    this.postdata(form.value)
    .then(resp => {
      this.status.changeStatus();
      ;})
      .catch(error => {
        console.log(error);
      });
}

  

}
