import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { TooltipPosition } from './tooltip.types';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  readonly text = input.required<string>();
  readonly position = input<TooltipPosition>('top');
}
