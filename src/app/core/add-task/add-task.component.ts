import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;

  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text || !this.day) {
      alert("All fields are required!");
      return;
    }

    const task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onSubmitTask.emit(task);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
