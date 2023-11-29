import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WhyUsComponent } from '../whyUs/whyus.component';
import { TruncateDirective } from '../../directives/truncate.directive';

@Component({
  selector: 'sobol-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    WhyUsComponent,
    TruncateDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
