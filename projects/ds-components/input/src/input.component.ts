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

import type { InputTheme } from './input.types';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly disabled = input(false);
  readonly theme = input<InputTheme>('default');
  readonly hint = input<string>('');
  readonly error = input<string>('');
  readonly maxLength = input<number>(0);
  readonly type = input<'text' | 'password' | 'email' | 'number' | 'tel'>('text');

  protected readonly value = signal('');

  @Output() readonly inputChange = new EventEmitter<string>();

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  protected handleChange(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this.onChange(val);
    this.inputChange.emit(val);
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
