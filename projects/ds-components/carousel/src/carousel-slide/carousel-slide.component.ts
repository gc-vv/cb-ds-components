import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cb-carousel-slide',
  standalone: true,
  template: `<ng-content />`,
  styles: [`:host { display: block; flex-shrink: 0; overflow: hidden; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselSlideComponent {}
