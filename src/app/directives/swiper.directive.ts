import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[Swiper]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  @Input() config?: SwiperOptions;

  constructor(
    private el: ElementRef<SwiperContainer>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    debugger;
    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this.el.nativeElement, this.config);
      console.log('hmmmm');
      this.el.nativeElement.initialize();
    }
  }
}
