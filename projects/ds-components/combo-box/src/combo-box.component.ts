import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  EventEmitter,
  HostListener,
  input,
  Output,
  signal
} from '@angular/core';

import type { ComboBoxOption } from './combo-box.types';

@Component({
  selector: 'app-combo-box',
  standalone: true,
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComboBoxComponent {
  readonly options = input.required<ComboBoxOption[]>();
  readonly placeholder = input('Selecione');
  readonly label = input<string>('');
  readonly disabled = input(false);
  readonly required = input(false);

  protected readonly inputValue = signal('');
  protected readonly isOpen = signal(false);
  protected readonly selectedOption = signal<ComboBoxOption | null>(null);

  @Output() readonly select = new EventEmitter<ComboBoxOption>();

  protected readonly filteredOptions = computed(() => {
    const query = this.inputValue().toLowerCase();
    if (!query) return this.options();
    return this.options().filter(
      (o) =>
        o.label.toLowerCase().includes(query) ||
        o.value.toLowerCase().includes(query)
    );
  });

  constructor(private readonly elementRef: ElementRef) {}

  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  protected onInputChange(event: Event): void {
    this.inputValue.set((event.target as HTMLInputElement).value);
    this.isOpen.set(true);
    this.selectedOption.set(null);
  }

  protected openDropdown(): void {
    if (!this.disabled()) this.isOpen.set(true);
  }

  protected chooseOption(option: ComboBoxOption): void {
    this.selectedOption.set(option);
    this.inputValue.set(option.label);
    this.isOpen.set(false);
    this.select.emit(option);
  }

  protected clearInput(): void {
    this.inputValue.set('');
    this.selectedOption.set(null);
    this.isOpen.set(false);
  }

  private close(): void {
    if (this.isOpen()) {
      if (!this.selectedOption() && this.inputValue()) {
        const match = this.options().find(
          (o) => o.label === this.inputValue() || o.value === this.inputValue()
        );
        if (match) {
          this.selectedOption.set(match);
        } else {
          this.inputValue.set(this.selectedOption()?.label ?? '');
        }
      }
      this.isOpen.set(false);
    }
  }

  protected trackByValue(_: number, option: ComboBoxOption): string {
    return option.value;
  }
}
