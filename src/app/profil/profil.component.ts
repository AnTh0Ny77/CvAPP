import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {ModalComponent} from '../modal/modal.component'
import { SendstatusService } from "../services/sendstatus.service";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  modalDialogRef: MatDialogRef<ModalComponent>;

  constructor(private dialog: MatDialog, private status : SendstatusService) { }
  stats: boolean;
  ngOnInit() {
    this.status.currentStatus.subscribe(status => this.stats = status );
  }
  openModal(){
    this.modalDialogRef = this.dialog.open(ModalComponent);
  }
  test(){
    console.log(this.stats);
  }
  
}
