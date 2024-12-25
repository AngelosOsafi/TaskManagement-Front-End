import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, private appComponent: AppComponent) {}

  toggleList() {
    this.appComponent.hideLogo();
    this.router.navigate(['/task-list']);
  }

  toggleForm() {
    this.appComponent.hideLogo();
    this.router.navigate(['/task-form']);
  }

  goToHome() {
    this.appComponent.showLogo();
    this.router.navigate(['/']);
  }
}
