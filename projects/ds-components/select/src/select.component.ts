import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  input,
  Output,
  signal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { OptionProps } from './select.types';

@Component({
  selector: 'cb-select',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly helperText = input<string>('');
  readonly errorMessage = input<string>('');
  readonly placeholder = input<string>('');
  readonly options = input.required<OptionProps[]>();
  readonly isRequired = input(false);
  readonly showRequiredIndicator = input(true);
  readonly isDisabled = input(false);
  readonly isInvalid = input(false);
  readonly isReadOnly = input(false);
  readonly id = input<string>('');
  readonly className = input<string>('');

  protected readonly value = signal('');

  @Output() readonly selectChange = new EventEmitter<string>();

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  protected handleChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.value.set(val);
    this.onChange(val);
    this.selectChange.emit(val);
  }

  protected handleBlur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(): void {}
}
