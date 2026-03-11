import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import type { DividerOrientation, DividerVariant } from './divider.types';

@Component({
  selector: 'cb-divider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent {
  readonly orientation = input<DividerOrientation>('horizontal');

  readonly variant = input<DividerVariant>('solid');

  readonly className = input<string>('');
}
