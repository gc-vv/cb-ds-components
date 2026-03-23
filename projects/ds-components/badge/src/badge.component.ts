import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import type { BadgeVariant, BadgeSize } from './badge.types';

@Component({
  selector: 'cb-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  readonly variant = input<BadgeVariant>('primary');

  readonly size = input<BadgeSize>('medium');

  readonly className = input<string>('');
}
