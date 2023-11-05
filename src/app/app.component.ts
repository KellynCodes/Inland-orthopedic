import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public IsViewReady: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.IsViewReady = false;
    }, 3500);
  }
}
