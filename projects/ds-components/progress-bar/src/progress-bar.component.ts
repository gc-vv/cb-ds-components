import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';

export type ProgressBarSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'cb-progress-bar',
  standalone: true,
  imports: [NgClass, NgIf, NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  readonly value = input.required<number>();
  readonly size = input<ProgressBarSize>('medium');
  readonly showValue = input<boolean>(false);
  readonly className = input<string>('');

  protected readonly clampedValue = computed(() => {
    const v = this.value();
    return Math.min(100, Math.max(0, v));
  });

  protected readonly fillStyle = computed(() => ({
    width: `${this.clampedValue()}%`
  }));
}
