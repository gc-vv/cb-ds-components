import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  input,
  Output,
  effect,
  Renderer2,
  inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  DOCUMENT
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
export class ModalComponent implements AfterViewInit, OnDestroy {
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  @ViewChild('overlay') overlayRef!: ElementRef<HTMLElement>;

  readonly isOpen = input<boolean>(false);
  readonly size = input<ModalSize>('medium');
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly className = input<string>('');

  @Output() readonly onOpenChange = new EventEmitter<boolean>();

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(this.document.body, 'overflow');
      }
    });
  }

  ngAfterViewInit(): void {
    this.renderer.appendChild(this.document.body, this.overlayRef.nativeElement);
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

  ngOnDestroy(): void {
    this.renderer.removeStyle(this.document.body, 'overflow');
    if (this.overlayRef?.nativeElement?.parentElement) {
      this.renderer.removeChild(
        this.overlayRef.nativeElement.parentElement,
        this.overlayRef.nativeElement
      );
    }
  }
}
