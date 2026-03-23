import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  input,
  Output,
  signal,
  computed
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'cb-input-stepper',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-stepper.component.html',
  styleUrl: './input-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputStepperComponent),
      multi: true
    }
  ]
})
export class InputStepperComponent implements ControlValueAccessor {
  readonly min = input<number>(0);
  readonly max = input<number>(100);
  readonly step = input<number>(1);
  readonly disabled = input<boolean>(false);
  readonly className = input<string>('');
  readonly id = input<string>('');

  protected readonly value = signal<number>(0);

  @Output() readonly valueChange = new EventEmitter<number>();

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  protected readonly isDecrementDisabled = computed(() => {
    return this.disabled() || this.value() <= this.min();
  });

  protected readonly isIncrementDisabled = computed(() => {
    return this.disabled() || this.value() >= this.max();
  });

  protected decrement(): void {
    if (this.isDecrementDisabled()) return;
    
    const newValue = Math.max(this.min(), this.value() - this.step());
    this.updateValue(newValue);
  }

  protected increment(): void {
    if (this.isIncrementDisabled()) return;
    
    const newValue = Math.min(this.max(), this.value() + this.step());
    this.updateValue(newValue);
  }

  protected handleInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let newValue = parseInt(input.value, 10);

    if (isNaN(newValue)) {
      newValue = this.min();
    } else {
      newValue = Math.max(this.min(), Math.min(this.max(), newValue));
    }

    this.updateValue(newValue);
  }

  protected handleBlur(): void {
    this.onTouched();
  }

  private updateValue(newValue: number): void {
    this.value.set(newValue);
    this.onChange(newValue);
    this.valueChange.emit(newValue);
  }

  writeValue(value: number): void {
    if (value !== null && value !== undefined) {
      this.value.set(Math.max(this.min(), Math.min(this.max(), value)));
    }
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(): void {}
}
