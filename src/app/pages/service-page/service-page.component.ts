import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { IndexTask } from '../../core/interfaces';
import { TaskComponent } from "../../shared/componets/task/task.component";
import { TaskListComponent } from '../../shared/componets/task-list/task-list.component';

@Component({
  selector: 'app-service-page',
  standalone: true, // importante si usas standalone components
  imports: [TaskComponent, TaskListComponent],
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent { 

  taskService = inject(TaskService);

  addNewTask(task: IndexTask) {
    this.taskService.addTask(task);
  }

  deleteTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }
}
