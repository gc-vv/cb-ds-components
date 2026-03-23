import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'cb-form-control',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlComponent {
  readonly label = input<string>('');

  readonly errorMessage = input<string>('');

  readonly helperText = input<string>('');

  readonly isRequired = input<boolean>(false);

  readonly isDisabled = input<boolean>(false);

  readonly isInvalid = input<boolean>(false);

  readonly isReadOnly = input<boolean>(false);

  readonly showRequiredIndicator = input<boolean>(true);

  readonly id = input<string>('');

  readonly className = input<string>('');
}
