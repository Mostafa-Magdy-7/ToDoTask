import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  lists: string[] = ['All Tasks', 'Work', 'Personal'];
  tasks: string[] = ['Buy groceries', 'Pay bills', 'Clean room'];


  addList(newList: string) {
    this.lists.push(newList);
  }
  addTask(newTask:string){
    this.tasks.push(newTask);
  }
}