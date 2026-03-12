import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cb-carousel-slide',
  standalone: true,
  template: `<ng-content />`,
  styles: [`:host { display: block; width: 100%; flex-shrink: 0; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselSlideComponent {}
