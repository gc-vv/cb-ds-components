import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  input,
  Output,
  effect,
  Renderer2,
  inject
} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import type { ModalSize } from './modal.types';

@Component({
  selector: 'cb-modal',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  private readonly renderer = inject(Renderer2);

  readonly isOpen = input<boolean>(false);
  readonly size = input<ModalSize>('medium');
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly className = input<string>('');

  @Output() readonly onOpenChange = new EventEmitter<boolean>();

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    });
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: Event): void {
    if (this.isOpen()) {
      event.preventDefault();
      this.close();
    }
  }

  protected handleOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  protected close(): void {
    this.onOpenChange.emit(false);
  }

  private disableBodyScroll(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  private enableBodyScroll(): void {
    this.renderer.removeStyle(document.body, 'overflow');
  }

  ngOnDestroy(): void {
    this.enableBodyScroll();
  }
}
