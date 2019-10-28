import { Component, OnInit } from '@angular/core';
import { FrontService } from "../services/front.service";

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
array: any;
  constructor(private Front: FrontService) { }

  ngOnInit() {
    this.Front.getFront().subscribe(data => {
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
