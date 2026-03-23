import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cb-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'tertiary' | 'conversion'>('primary');
  readonly disabled = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');
}
