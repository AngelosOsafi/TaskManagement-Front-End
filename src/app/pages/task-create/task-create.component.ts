import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
})
export class TaskCreateComponent {
  task : Partial<Task> = {
    title: '',
    description: '',
    dueDate: '',
    isCompleted: false
  };

  tasks: any[] = []

  createTask() {
    const newTask =
    this.task = {
      ...this.task,
      id: crypto.randomUUID(),
    }
    this.tasks.push(newTask);

    this.task = { 
      title: '',
      description: '',
      dueDate: '' 
    };
    console.log('Saved Task:', newTask);
    console.log('All Tasks:', this.tasks);
  }
}
