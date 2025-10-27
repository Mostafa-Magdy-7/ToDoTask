import { Component,OnInit } from '@angular/core';
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
export class Tasks implements OnInit {
  showPopup=false;
  taskName='';
  showError=false;
  tasks: any[] = [];
  count=Math.floor(Math.random() * 201);
  
constructor(public taskService: TaskService) {}
togglePopup() {
    this.showPopup = !this.showPopup;
    this.showError=false;
    

  }
   ngOnInit() {
    if(this.taskService.getUserTasks())
    {

    }
    this.taskService.getApiTasks().subscribe((data: any) => {
      console.log(this.count);
      this.tasks = data.slice(this.count, this.count+10); // just show first 10
    });
  
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
