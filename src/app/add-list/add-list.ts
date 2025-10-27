import { Component } from '@angular/core';
import { Groups } from '../groups/groups';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task';
import { CommonModule } from '@angular/common'; 




@Component({
  selector: 'app-add-list',
  imports: [Groups,FormsModule,CommonModule],
  standalone:true,
  templateUrl: './add-list.html',
  styleUrl: './add-list.css',
})
export class AddTask {
  
constructor(private taskService: TaskService) {}

  showPopup = false;
  listName = '';
   showError = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
    this.showError = false;
  }

  addList() {
     if (!this.listName.trim()) {
      this.showError = true;}
      else{
         this.taskService.addList(this.listName);
   this.listName='';
    this.showPopup = false;
      }
  
  }
}
