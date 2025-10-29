import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/interfaceTask';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  showPopup = false;
  taskName = '';
  showError = false;
  tasks: Task[] = [];
  count = Math.floor(Math.random() * 201);

  constructor(public taskService: TaskService) {}
  togglePopup() {
    this.showPopup = !this.showPopup;
    this.showError = false;
  }
  ngOnInit() {
    if (this.taskService.tasks && this.taskService.tasks.length > 0) {
      this.tasks = this.taskService.tasks;
    } else {
      this.taskService.getApiTasks().subscribe((data: any) => {
        console.log(this.count);
        this.tasks = data.slice(this.count, this.count + 10);
      });
    }
  }
  addTasks() {
    if (!this.taskName.trim()) {
      this.showError = true;
    } else {
      const newTask: Task = {
        id: this.taskService.id,
        userId: 1, // I will make this dynamic later
        title: this.taskName,
        completed: false,
      };
      this.taskService.addTask(newTask);
      this.tasks = [...this.taskService.tasks];
      this.taskService.id++;
      this.taskName = '';
      this.showPopup = false;
    }
  }
  get lists() {
    return this.taskService.lists;
  }
}
