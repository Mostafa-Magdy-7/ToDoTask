import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TaskService } from '../task';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-tasks',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  showPopup=false;
  taskName='';
  showError=false;
constructor(public taskService: TaskService) {}
togglePopup() {
    this.showPopup = !this.showPopup;
    this.showError=false;

  }
  get tasks() {
    return this.taskService.tasks;
  }
   addTasks() {
    if (!this.taskName.trim()) {
      this.showError = true;}
      else{
    this.taskService.addTask(this.taskName);
    this.taskName='';
   this.showPopup=false;
      }
  }

}
