import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {ModalComponent} from '../modal/modal.component'



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  modalDialogRef: MatDialogRef<ModalComponent>;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openModal(){
    this.modalDialogRef = this.dialog.open(ModalComponent);
  }
  
}
