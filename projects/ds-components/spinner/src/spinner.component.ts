import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

export type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large';
export type SpinnerThickness = 'xthin' | 'thin' | 'normal' | 'thick' | 'xthick';
export type SpinnerSpeed = 'xfast' | 'fast' | 'normal' | 'slow' | 'xslow';

const SIZE_MAP: Record<SpinnerSize, string> = {
  xsmall: '16px',
  small:  '24px',
  medium: '32px',
  large:  '48px',
};

const THICKNESS_MAP: Record<SpinnerThickness, string> = {
  xthin:  '1px',
  thin:   '2px',
  normal: '3px',
  thick:  '4px',
  xthick: '5px',
};

const SPEED_MAP: Record<SpinnerSpeed, string> = {
  xfast:  '0.4s',
  fast:   '0.6s',
  normal: '0.8s',
  slow:   '1.2s',
  xslow:  '2s',
};

@Component({
  selector: 'cb-spinner',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  readonly size      = input<SpinnerSize>('medium');
  readonly thickness = input<SpinnerThickness>('normal');
  readonly speed     = input<SpinnerSpeed>('normal');
  readonly label     = input<string>('Carregando');
  readonly className = input<string>('');

  protected readonly hostStyle = computed(() => ({
    width:           SIZE_MAP[this.size()],
    height:          SIZE_MAP[this.size()],
    borderWidth:     THICKNESS_MAP[this.thickness()],
    animationDuration: SPEED_MAP[this.speed()],
  }));
}
