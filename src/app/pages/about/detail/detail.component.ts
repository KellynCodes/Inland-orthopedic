import { Component, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OrthoSpecialistsDto } from './Data/ortho.specialists.dto';
import {
  OrthopedicSpecialties,
  PhysicalTherapy,
} from './Data/orthospecialists';

@Component({
  selector: 'app-detail',
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

  // Function to open the modal and apply the CSS class
  ngOnInit(): void {
    this.openModal();
  }

  ngOnDestroy(): void {
    this.closeModal();
  }

  openModal() {
    this.renderer.addClass(
      this.el.nativeElement.ownerDocument.body,
      'modal-open'
    );
  }
  // Function to close the modal and remove the CSS class
  closeModal() {
    this.renderer.removeClass(
      this.el.nativeElement.ownerDocument.body,
      'modal-open'
    );
    this.router.navigateByUrl('about');
  }
}
