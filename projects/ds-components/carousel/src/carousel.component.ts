import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  output,
  Renderer2,
  signal,
  ViewChild
} from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { CarouselState, ControlsPosition, SsrBreakpoint } from './carousel.types';

@Component({
  selector: 'cb-carousel',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  readonly withControls = input<boolean>(true);
  readonly withIndicators = input<boolean>(false);
  readonly withGutter = input<boolean>(false);
  readonly controlsPosition = input<ControlsPosition>('inside');
  readonly autoPlay = input<boolean>(false);
  readonly slidesToScroll = input<number>(1);
  readonly draggable = input<boolean>(true);
  readonly loop = input<boolean>(false);
  readonly sidePadding = input<boolean>(false);
  readonly ssr = input<boolean>(false);
  readonly ssrDefaultBreakpoint = input<SsrBreakpoint>('xxlarge');
  readonly className = input<string>('');

  readonly onAfterChange = output<{ previousSlide: number; state: CarouselState }>();
  readonly onBeforeChange = output<{ previousSlide: number; state: CarouselState }>();
  readonly onClickControlsPrevious = output<number>();
  readonly onClickControlsNext = output<number>();
  readonly onClickIndicators = output<number>();
  readonly onClickAutoPlay = output<boolean>();

  @ViewChild('track') private trackRef!: ElementRef<HTMLElement>;

  protected readonly currentIndex = signal(0);
  protected readonly isPlaying = signal(false);
  protected totalSlides = 0;

  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  private dragStartX = 0;
  private isDragging = false;
  private cdr = inject(ChangeDetectorRef);
  private renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.initSlides();
    if (this.autoPlay()) {
      this.startAutoPlay();
    }
  }

  private initSlides(): void {
    if (!this.trackRef) return;
    const slideEls = this.trackRef.nativeElement.querySelectorAll('cb-carousel-slide');
    this.totalSlides = slideEls.length;
    const perPage = this.slidesToScroll();
    const width = `${100 / perPage}%`;
    slideEls.forEach(el => {
      this.renderer.setStyle(el, 'min-width', width);
      this.renderer.setStyle(el, 'max-width', width);
      this.renderer.setStyle(el, 'flex-shrink', '0');
    });
    if (this.withGutter()) {
      const gap = 12;
      const adjustedWidth = `calc(${width} - ${gap * (perPage - 1) / perPage}px)`;
      slideEls.forEach(el => {
        this.renderer.setStyle(el, 'min-width', adjustedWidth);
        this.renderer.setStyle(el, 'max-width', adjustedWidth);
      });
    }
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  protected get showPrev(): boolean {
    return this.loop() ? this.totalSlides > 1 : this.currentIndex() > 0;
  }

  protected get showNext(): boolean {
    const maxIndex = Math.ceil(this.totalSlides / this.slidesToScroll()) - 1;
    return this.loop() ? this.totalSlides > 1 : this.currentIndex() < maxIndex;
  }

  protected get indicatorCount(): number[] {
    return Array.from(
      { length: Math.ceil(this.totalSlides / this.slidesToScroll()) },
      (_, i) => i
    );
  }

  protected prev(): void {
    const previous = this.currentIndex();
    const maxIndex = Math.ceil(this.totalSlides / this.slidesToScroll()) - 1;
    let next: number;
    if (this.currentIndex() <= 0) {
      next = this.loop() ? maxIndex : 0;
    } else {
      next = this.currentIndex() - 1;
    }
    this.navigateTo(next, previous);
    this.onClickControlsPrevious.emit(next);
  }

  protected next(): void {
    const previous = this.currentIndex();
    const maxIndex = Math.ceil(this.totalSlides / this.slidesToScroll()) - 1;
    let next: number;
    if (this.currentIndex() >= maxIndex) {
      next = this.loop() ? 0 : maxIndex;
    } else {
      next = this.currentIndex() + 1;
    }
    this.navigateTo(next, previous);
    this.onClickControlsNext.emit(next);
  }

  protected goTo(index: number): void {
    const previous = this.currentIndex();
    this.navigateTo(index, previous);
    this.onClickIndicators.emit(index);
  }

  protected toggleAutoPlay(): void {
    if (this.isPlaying()) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
    this.onClickAutoPlay.emit(this.isPlaying());
  }

  private navigateTo(next: number, previous: number): void {
    const state = this.getState(previous);
    this.onBeforeChange.emit({ previousSlide: previous, state });
    this.currentIndex.set(next);
    this.onAfterChange.emit({ previousSlide: previous, state: this.getState(next) });
    this.cdr.markForCheck();
  }

  private getState(slide: number): CarouselState {
    return { currentSlide: slide, totalSlides: this.totalSlides, isPlaying: this.isPlaying() };
  }

  private startAutoPlay(): void {
    this.isPlaying.set(true);
    this.autoPlayInterval = setInterval(() => this.next(), 8000);
    this.cdr.markForCheck();
  }

  private stopAutoPlay(): void {
    this.isPlaying.set(false);
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
    this.cdr.markForCheck();
  }

  // ── Drag / Swipe ──────────────────────────────────────────────────────────

  protected onMouseDown(event: MouseEvent): void {
    if (!this.draggable()) return;
    this.isDragging = true;
    this.dragStartX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  protected onMouseUp(event: MouseEvent): void {
    if (!this.isDragging) return;
    this.isDragging = false;
    const diff = this.dragStartX - event.clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? this.next() : this.prev();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  protected onMouseMove(event: MouseEvent): void {
    if (this.isDragging) event.preventDefault();
  }

  protected onTouchStart(event: TouchEvent): void {
    if (!this.draggable()) return;
    this.dragStartX = event.touches[0].clientX;
  }

  protected onTouchEnd(event: TouchEvent): void {
    if (!this.draggable()) return;
    const diff = this.dragStartX - event.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? this.next() : this.prev();
    }
  }
}
