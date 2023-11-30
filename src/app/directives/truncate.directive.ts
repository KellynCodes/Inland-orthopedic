import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appTruncateText]',
  standalone: true,
})
export class TruncateDirective implements AfterViewInit {
  @Input('appTruncateText') maxLength!: number;

  constructor(
    private pTag: ElementRef<HTMLParagraphElement>,
    private buttonTag: ElementRef<HTMLButtonElement>,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.toggleText();
  }

  private toggleText(): void {
    debugger;
    let text = this.pTag.nativeElement.innerText;
    const buttonElement = `<button type="button" id="about-detail" class="cursor-pointer inline-block bg-[#003367] hover:bg-[#ee6565e6] text-white rounded-full px-3 py-1 text-sm font-semibold mb-2">Read More</button>`;
    if (text.length < this.maxLength) {
      return;
    }
    const dotRegex: RegExp = /\./g;
    const truncatedText =
      text.replace(dotRegex, '.<br/><br />').slice(0, this.maxLength) + '...';

    this.pTag.nativeElement.innerHTML = `${truncatedText}${buttonElement}`;
    const button: HTMLButtonElement =
      this.buttonTag.nativeElement.querySelector(
        '#about-detail'
      ) as HTMLButtonElement;
    fromEvent(button, 'click').subscribe(() => {
      this.router.navigate(['/about/detail']);
    });
  }
}
