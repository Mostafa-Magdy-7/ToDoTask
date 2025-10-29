import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './models/interfaceTask';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}
  lists: string[] = ['All Tasks', 'Work', 'Personal'];
  id = 201;
  tasks: Task[] = [];
  getUserTasks() {
    if (this.tasks) {
      return this.tasks.length;
    } else {
      return false;
    }
  }
  getApiTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }
  addList(newList: string) {
    this.lists.push(newList);
  }
  addTask(newTask: Task) {
    this.tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log(this.tasks);
  }
}
