import { Component, OnInit } from '@angular/core';
import { BackService } from "../services/back.service";

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {
  array: any;
  constructor(private Back: BackService) { }

  ngOnInit() {
    this.Back.getBack().subscribe(data => {
      this.array = data.map(resp => {
        return {
          id: resp.payload.doc.id,
          isEdit: false,
          Title: resp.payload.doc.data()['title'],
          Subtitle: resp.payload.doc.data()['subtitle'],
          Pic: resp.payload.doc.data()['pic'],
          Text: resp.payload.doc.data()['text'],
        };
      }) 
    }); 
  }

}
