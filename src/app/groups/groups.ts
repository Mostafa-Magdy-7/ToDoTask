import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule], // required to use *ngFor
  templateUrl: './groups.html',
  styleUrl: './groups.css',
})
export class Groups {
  constructor(public taskService: TaskService) {}

  get lists() {
    return this.taskService.lists;
  }
}
