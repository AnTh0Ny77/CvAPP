import { Component, OnInit } from '@angular/core';
import { TimelineService} from '../services/timeline.service'
import { AnonymousSubject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  array: any;
  constructor(private Time: TimelineService) { }

  ngOnInit() {
    this.Time.getTime().subscribe(data => {
      this.array = data.map(resp => {
        return {
          id: resp.payload.doc.id,
          isEdit: false,
          Title: resp.payload.doc.data()['title'],
          Date: resp.payload.doc.data()['date'],
          Pic: resp.payload.doc.data()['pic'],
          Text: resp.payload.doc.data()['text'],
          Avatar: resp.payload.doc.data()['avatar'],
          Href: resp.payload.doc.data()['href'],
        };
        
      }) 
      this.array.sort((a,b) => a.Date < b.Date);
    } ); 
    
  }

}
