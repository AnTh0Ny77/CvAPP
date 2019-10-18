import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendstatusService {
  private status = new BehaviorSubject(false);
  currentStatus = this.status.asObservable();

  constructor() { }
  changeStatus(){
    this.status.next(true);
  }
}
