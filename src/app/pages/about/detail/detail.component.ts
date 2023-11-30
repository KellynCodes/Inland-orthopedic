import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  constructor() {}
}
