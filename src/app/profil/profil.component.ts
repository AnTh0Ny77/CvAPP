import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {ModalComponent} from '../modal/modal.component'
import { SendstatusService } from "../services/sendstatus.service"
import { DynaProfilService } from "../services/dyna-profil.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  modalDialogRef: MatDialogRef<ModalComponent>;
  array:any;
  stats: boolean;
  
  constructor(private dialog: MatDialog, private status : SendstatusService,
    private Dyna: DynaProfilService) { }
  
  ngOnInit() {
    this.status.currentStatus.subscribe(status => this.stats = status );
    this.Dyna.getProfile().subscribe(data => {
      this.array = data.map(resp => {
        return {
          id: resp.payload.doc.id,
          isEdit: false,
          Name: resp.payload.doc.data()['name'],
          Cover: resp.payload.doc.data()['cover'],
          Profil: resp.payload.doc.data()['profil'],
          Fb: resp.payload.doc.data()['fb'],
          lk: resp.payload.doc.data()['lk'],
          Github: resp.payload.doc.data()['github'],
        };
      }) 
    }); 
  }
  openModal(){
    this.modalDialogRef = this.dialog.open(ModalComponent);
  } 
}
