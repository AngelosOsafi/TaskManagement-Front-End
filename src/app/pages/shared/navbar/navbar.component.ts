import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  toggleList() {
    this.router.navigate(['/homepage/task-list']);
  }

  toggleForm() {
    this.router.navigate(['/homepage/task-form']);
  }

  goToHome() {
    this.router.navigate(['/homepage']);
  }
}
