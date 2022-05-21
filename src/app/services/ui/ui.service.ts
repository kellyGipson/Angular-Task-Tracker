import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private addTaskIsOpen: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.addTaskIsOpen = !this.addTaskIsOpen;
    this.subject.next(this.addTaskIsOpen);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
