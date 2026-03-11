import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  signal,
  HostListener
} from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

import type { DrawerPlacement, DrawerSize, DrawerOpenChangeEvent } from './drawer.types';

@Component({
  selector: 'cb-drawer',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerComponent {
  readonly title = input<string>('');

  readonly placement = input<DrawerPlacement>('right');

  readonly size = input<DrawerSize>('medium');

  readonly open = input<boolean>(false);

  readonly hasContentPadding = input<boolean>(true);

  readonly className = input<string>('');

  readonly onOpenChange = output<DrawerOpenChangeEvent>();

  protected readonly isOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const openState = this.open();
      this.isOpen.set(openState);
      
      if (openState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  protected close(): void {
    this.isOpen.set(false);
    this.onOpenChange.emit({ open: false });
    document.body.style.overflow = '';
  }

  protected handleOverlayClick(): void {
    this.close();
  }

  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }
}
