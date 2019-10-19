import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { SendstatusService } from "../services/sendstatus.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor( private firestore: AngularFirestore, private status: SendstatusService,
    private Router: Router ) { }
  stats: boolean;
  ngOnInit() {
    this.status.currentStatus.subscribe(status => this.stats = status );
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
        this.Router.navigate(['404']);
      });
}

  

}
