import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelAddTask = new EventEmitter<string>();
  @Output() CreateTask = new EventEmitter<string>();

  onCancelAddTask() {
    this.cancelAddTask.emit();
  }
}
