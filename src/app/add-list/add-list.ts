import { Component } from '@angular/core';
import { Groups } from '../groups/groups';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-list',
  imports: [Groups, FormsModule, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './add-list.html',
  styleUrl: './add-list.css',
})
export class AddTask {
  constructor(private taskService: TaskService) {}
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  get name() {
    return this.form.get('name');
  }
  showPopup = false;
  listName = '';
  showError = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
    this.showError = false;
  }

  addList() {
    if (!this.listName.trim()) {
      this.showError = true;
    } else {
      this.taskService.addList(this.listName);
      this.listName = '';
      this.showPopup = false;
    }
  }
  closePopUp() {
    this.showPopup = !this.showPopup;
    this.listName = '';

  }
}
