import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appTruncateText]',
  standalone: true,
})
export class TruncateDirective {
  @Input('appTruncateText') maxLength!: number;

  constructor(
    private el: ElementRef,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  @HostListener('click') onClick() {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleText();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleText();
    }
  }

  private toggleText() {
    const text = this.el.nativeElement.innerText;
    if (text.length > this.maxLength) {
      const truncatedText = text.slice(0, this.maxLength) + '...';
      this.el.nativeElement.innerText = truncatedText;

      const readMoreLink = document.createElement('a');
      readMoreLink.textContent = 'Read More';
      readMoreLink.className =
        'cursor-pointer inline-block bg-[#003367] hover:bg-[#ee6565e6] text-white rounded-full px-3 py-1 text-sm font-semibold mb-2';
      readMoreLink.addEventListener('click', () => {
        this.router.navigate(['about/detail']);
      });

      this.el.nativeElement.appendChild(readMoreLink);
    }
  }
}
