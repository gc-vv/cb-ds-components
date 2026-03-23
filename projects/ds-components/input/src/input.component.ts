import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  input,
  Output,
  signal,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

import type { ElementDirection } from './input.types';

@Component({
  selector: 'cb-input',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet],
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
  readonly placeholder = input<string>('');
  readonly disabled = input(false);
  readonly isInvalid = input(false);
  readonly isReadOnly = input(false);
  readonly maxLength = input<number>(0);
  readonly type = input<'text' | 'password' | 'email' | 'number' | 'tel'>('text');
  readonly element = input<TemplateRef<any> | null>(null);
  readonly elementDirection = input<ElementDirection>('right');
  readonly className = input<string>('');
  readonly id = input<string>('');

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
