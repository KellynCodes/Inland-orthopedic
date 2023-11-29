import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, AlertComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  message: string | null = null;

  toggleMessage(): void {
    this.message = "This service isn't available now. Coming soon!";

    setTimeout(() => {
      this.message = null;
    }, 4000);
  }
}
