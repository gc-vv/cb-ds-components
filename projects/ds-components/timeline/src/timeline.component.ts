import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { TimelineOrientation, TimelineStep } from './timeline.types';

@Component({
  selector: 'cb-timeline',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  readonly steps       = input.required<TimelineStep[]>();
  readonly orientation = input<TimelineOrientation>('vertical');
  readonly className   = input<string>('');

  protected isLast(index: number): boolean {
    return index === this.steps().length - 1;
  }
}
