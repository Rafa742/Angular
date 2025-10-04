import { Component, input, output } from '@angular/core';
import { IndexTask } from '../../../core/interfaces';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  outputTaskid = output<number>();
  tasks = input.required<IndexTask[]>();

  deleteTask(id: number) {
    this.outputTaskid.emit(id);
  }
 }
