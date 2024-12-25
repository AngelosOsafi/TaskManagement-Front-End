import { Component } from '@angular/core';
import { TaskCreateComponent } from '../../task-create/task-create.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TaskCreateComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  goToHome() {
    if (this.showForm) {
      this.showForm = false;
    }
  }
}
