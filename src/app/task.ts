import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class TaskService {
   private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
   constructor(private http: HttpClient) {}
  lists: string[] = ['All Tasks', 'Work', 'Personal'];
  tasks: any[] = [{title:'Buy groceries',completed:false},{title:'Pay bills',completed:false}, {title:'Clean room',completed:false} ];

  getUserTasks() {
    if(this.tasks){
      return this.tasks.length;
       }
    else{
    return false;
        
      }
}
 getApiTasks() {
  return this.http.get<Task[]>(this.apiUrl);
}
  addList(newList: string) {
    this.lists.push(newList);
  }
  addTask(newTask:string){
    return this.http.post(this.apiUrl, newTask);
  }
}
export interface Task {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}