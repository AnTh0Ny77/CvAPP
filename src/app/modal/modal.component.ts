import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
}

  

}
