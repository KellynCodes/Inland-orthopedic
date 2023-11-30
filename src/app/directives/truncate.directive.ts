import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Inject,
  PLATFORM_ID,
  afterRender,
  afterNextRender,
  AfterRenderPhase,
  AfterContentChecked,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appTruncateText]',
  standalone: true,
})
export class TruncateDirective implements AfterContentChecked {
  @Input('appTruncateText') maxLength!: number;

  constructor(
    private el: ElementRef<HTMLParagraphElement>,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterContentChecked(): void {
    this.toggleText();
  }

  private toggleText() {
    const text = this.el.nativeElement.innerText;
    if (text.length > this.maxLength) {
      const truncatedText = text.slice(0, this.maxLength) + '...';
      this.el.nativeElement.innerText = truncatedText;
      this.el.nativeElement.append(
        `<a href="about/detail" class="cursor-pointer inline-block bg-[#003367] hover:bg-[#ee6565e6] text-white rounded-full px-3 py-1 text-sm font-semibold mb-2">Read More</a>`
      );
    }
  }
}
