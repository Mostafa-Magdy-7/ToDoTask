import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/interfaceTask';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  showPopup = false;
  taskName = '';
  showError = false;
  isListSelected=false;
  userTask=false;
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  count = Math.floor(Math.random() * 201);
  listSelected = '';
  listShowed='';
  isDone = new FormControl(false);
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  get name() {
    return this.form.get('name');
  }

  constructor(public taskService: TaskService) {}
  togglePopup() {
    this.showPopup = !this.showPopup;
    this.showError = false;
  }
  
  ngOnInit() {
     this.taskService.showList('All Tasks');
    
    this.taskService.selectedList$.subscribe(list => {
    this.listShowed = list;
    this.filterTasks();
  });
    if (this.taskService.filteredTasks && this.taskService.filteredTasks.length > 0) {
      this.filteredTasks = this.taskService.filteredTasks;
    } else {
      this.taskService.getApiTasks().subscribe((data: any) => {
        console.log(this.count);
        this.filteredTasks = data.slice(this.count, this.count + 10);
      });
    }
  }
  selectList(listTask: string) {
    console.log(listTask);
    this.listSelected = listTask;
    this.isListSelected = true;
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
        listForTask: this.listSelected,
      };
      this.taskService.addTask(newTask);
      this.filteredTasks = [...this.taskService.tasks];
      this.taskService.id++;
      this.taskName = '';
      this.showPopup = false;
      this.listSelected = '';
    }
  }

  get lists() {
    return this.taskService.lists;
  }
  closePopUp() {
    this.showPopup = !this.showPopup;
    this.taskName='';
  }
  filterTasks() {
  if (this.listShowed === 'All Tasks') {
    this.filteredTasks = this.taskService.tasks;
  } else {
    this.filteredTasks = this.taskService.tasks
      .filter(task => task.listForTask === this.listShowed);
  }
}
onCheckboxChange(task: Task, event: Event) {
  const checkbox = event.target as HTMLInputElement;
  task.completed = checkbox.checked;

  console.log("Updated task:", task);
}


//  get selectedList() {
//   return this.taskService.selectedList || 'List';
// }
}
