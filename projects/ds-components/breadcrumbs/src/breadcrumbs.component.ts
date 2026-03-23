import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { BreadcrumbItem } from './breadcrumbs.types';

@Component({
  selector: 'cb-breadcrumbs',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  readonly items = input.required<BreadcrumbItem[]>();

  readonly separator = input<string>('>');

  readonly useHomeIcon = input<boolean>(false);

  readonly className = input<string>('');

  protected isLast(index: number): boolean {
    return index === this.items().length - 1;
  }
}
