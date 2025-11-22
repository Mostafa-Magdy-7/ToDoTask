import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule], // required to use *ngFor
  templateUrl: './groups.html',
  styleUrl: './groups.css',
})
export class Groups {
  selectedList=true;
  constructor(public taskService: TaskService) {}

  get lists() {
    return this.taskService.lists;
  }
  form=new FormGroup({
    nameOfList:new FormControl({
      
    })
  })
  clicked(list:string){
    this.taskService.showList(list); 
  }
  
}
