import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  output,
  signal
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'cb-textarea',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  readonly label                = input.required<string>();
  readonly errorMessage         = input<string>('');
  readonly helperText           = input<string>('');
  readonly placeholder          = input<string>('');
  readonly resize               = input<boolean>(false);
  readonly isRequired           = input<boolean>(false);
  readonly showRequiredIndicator = input<boolean>(true);
  readonly isDisabled           = input<boolean>(false);
  readonly isInvalid            = input<boolean>(false);
  readonly isReadOnly           = input<boolean>(false);
  readonly rows                 = input<number>(4);
  readonly className            = input<string>('');

  readonly onChange = output<string>();

  protected readonly value = signal('');

  private _onChange: (v: string) => void = () => {};
  private _onTouched: () => void = () => {};

  protected onInput(val: string): void {
    this.value.set(val);
    this._onChange(val);
    this.onChange.emit(val);
  }

  protected onBlur(): void {
    this._onTouched();
  }

  writeValue(val: string): void {
    this.value.set(val ?? '');
  }

  registerOnChange(fn: (v: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }
}
