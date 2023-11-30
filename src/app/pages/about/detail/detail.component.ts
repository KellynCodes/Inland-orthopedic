import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrthoSpecialistsDto } from './Data/ortho.specialists.dto';
import {
  OrthopedicSpecialties,
  PhysicalTherapy,
} from './Data/orthospecialists';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sobol-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  public orthopedicSpecialists: OrthoSpecialistsDto[] = OrthopedicSpecialties;
  public physicalTherapy: OrthoSpecialistsDto[] = PhysicalTherapy;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {}

  // Function to close the modal and remove the CSS class
  closeModal() {
    console.log('clicked');
    this.router.navigateByUrl('about');
  }
}
