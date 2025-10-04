import { effect, Injectable, signal } from '@angular/core';
import { IndexTask } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = signal<IndexTask[]>([]);

  constructor() { 
   this.tasks.set(this.loadTasksFromLocalStorage());
  }

  addTask(task: IndexTask) {
    this.tasks.update(tasks => [...tasks, task]);
  }

  removeTask(taskId: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  saveTaksToLocalStorage = effect(() => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  });

  loadTasksFromLocalStorage(): IndexTask[] {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks) as IndexTask[];
    }
    return [];
  }
}
