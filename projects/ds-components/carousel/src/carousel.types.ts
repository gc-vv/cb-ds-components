export type ControlsPosition = 'inside' | 'outside';

export type SsrBreakpoint = 'small' | 'initial' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

export interface CarouselState {
  currentSlide: number;
  totalSlides: number;
  isPlaying: boolean;
}
