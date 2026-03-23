import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
  effect,
  inject,
  input,
  output,
  signal
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
export class DrawerComponent implements AfterViewInit, OnDestroy {
  readonly title = input<string>('');

  readonly placement = input<DrawerPlacement>('right');

  readonly size = input<DrawerSize>('medium');

  readonly open = input<boolean>(false);

  readonly hasContentPadding = input<boolean>(true);

  readonly overlay = input<boolean>(true);

  readonly className = input<string>('');

  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  @ViewChild('drawerContainer') containerRef!: ElementRef<HTMLElement>;

  readonly onOpenChange = output<DrawerOpenChangeEvent>();

  protected readonly isOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const openState = this.open();
      this.isOpen.set(openState);
      if (openState) {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(this.document.body, 'overflow');
      }
    });
  }

  ngAfterViewInit(): void {
    this.renderer.appendChild(this.document.body, this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(this.document.body, 'overflow');
    if (this.containerRef?.nativeElement?.parentElement) {
      this.renderer.removeChild(
        this.containerRef.nativeElement.parentElement,
        this.containerRef.nativeElement
      );
    }
  }

  protected close(): void {
    this.isOpen.set(false);
    this.onOpenChange.emit({ open: false });
    this.renderer.removeStyle(this.document.body, 'overflow');
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
