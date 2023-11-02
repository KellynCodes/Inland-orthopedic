import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollTarget = new BehaviorSubject<string>('');

  constructor(private router: Router) {}

  setScrollTarget(targetId: string, url: string | null = null) {
    if (url != null) {
      this.router.navigateByUrl(url);
    }
    this.scrollTarget.next(targetId);
  }

  getScrollTarget() {
    return this.scrollTarget.asObservable();
  }
}
