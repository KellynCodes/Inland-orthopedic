import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sobol-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() customClasses: string = '';
  @Input() link?: string = '';
  @Input() backgroundStyles?: string = '';
}
