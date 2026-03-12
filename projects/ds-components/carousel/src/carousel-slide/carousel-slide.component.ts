import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cb-carousel-slide',
  standalone: true,
  template: `<ng-content />`,
  styles: [`:host {
    display: block;
    min-width: calc(100% / var(--cb-slides-per-page, 1));
    max-width: calc(100% / var(--cb-slides-per-page, 1));
    flex-shrink: 0;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselSlideComponent {}
