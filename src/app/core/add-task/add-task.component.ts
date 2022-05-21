import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui/ui.service';
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
  showAddTask!: boolean;
  subscription!: Subscription;

  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {  }

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
