import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Groups } from './groups/groups';
import { AddTask } from './add-list/add-list';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Groups, AddTask, Tasks],
  template: `
    <div class="container p-4">
      <div class="row">
        <div class="col-4">
          <app-add-list></app-add-list>
          <app-groups></app-groups>
        </div>
        <div class="col-8">
          <app-tasks></app-tasks>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('toDoTask');
}
