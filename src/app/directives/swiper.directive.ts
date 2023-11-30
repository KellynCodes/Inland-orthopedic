import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[Swiper]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  @Input() config!: SwiperOptions;

  constructor(private el: ElementRef<SwiperContainer>) {}

  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement, this.config);
    this.el.nativeElement.initialize();
  }
}
