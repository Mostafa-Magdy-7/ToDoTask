import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './models/interfaceTask';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}
  lists: string[] = ['All Tasks', 'Work', 'Personal'];
  id = 201;
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  private selectedListSource = new BehaviorSubject<string>('');
  selectedList$ = this.selectedListSource.asObservable();
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
  showList(list: string) {
    this.selectedListSource.next(list);
    this.filteredTasks = this.getTasksByList(list);
  }
  getTasksByList(list: string): Task[] {
    if (list === 'All Tasks') {
      return this.tasks; // show all tasks
    } else {
      return this.tasks.filter((task) => task.listForTask === list);
    }
  }
}
