import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
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
