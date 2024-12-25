import { Component } from '@angular/core';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskManagementApp';
  showImage: boolean = true;

  showLogo() {
    this.showImage = true;
  }

  hideLogo() {
    this.showImage = false;
  }

  onActivate(event: any) {
    this.hideLogo();
  }
}
