import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToogleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  ngOnInit(): void {}

  /*
  to keep an order of when to call task service, here is an event emitter to call service but from parent component (task.component)
  in the parent component html should be set the function call where onDeleteTask is fired off
   */
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToogleReminder.emit(task);
  }
}
