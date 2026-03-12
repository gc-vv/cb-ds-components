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

@Component({
  selector: 'cb-radio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly value = input<string>('');
  readonly name = input<string>('');
  readonly isDisabled = input<boolean>(false);
  readonly isChecked = input<boolean>(false);

  protected readonly checkedState = signal(false);

  @Output() readonly radioChange = new EventEmitter<string>();

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  protected get isSelected(): boolean {
    return this.isChecked() || this.checkedState();
  }

  protected handleChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.checkedState.set(true);
      this.onChange(this.value());
      this.onTouched();
      this.radioChange.emit(this.value());
    }
  }

  writeValue(value: string): void {
    this.checkedState.set(value === this.value());
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(): void {}
}
