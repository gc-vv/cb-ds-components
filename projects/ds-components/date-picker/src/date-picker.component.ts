import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  inject,
  input,
  Output,
  signal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { CalendarDay } from './date-picker.types';

@Component({
  selector: 'cb-date-picker',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  readonly label = input<string>('');
  readonly placeholder = input<string>('DD/MM/AAAA');
  readonly helperText = input<string>('');
  readonly errorMessage = input<string>('');
  readonly isRequired = input(false);
  readonly showRequiredIndicator = input(true);
  readonly isDisabled = input(false);
  readonly isInvalid = input(false);
  readonly isReadOnly = input(false);
  readonly id = input<string>('');
  readonly className = input<string>('');
  readonly minDate = input<string>('');
  readonly maxDate = input<string>('');
  readonly value = input<string>('');

  @Output() readonly dateChange = new EventEmitter<string>();

  protected readonly isOpen = signal(false);
  protected readonly viewDate = signal(new Date());
  protected readonly selectedDate = signal<Date | null>(null);
  protected readonly calendarPos = signal({ top: 0, left: 0, width: 0 });

  protected readonly WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  protected readonly MONTHS = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  protected readonly displayValue = computed(() => {
    const d = this.selectedDate();
    if (!d) return '';
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}/${d.getFullYear()}`;
  });

  protected readonly monthLabel = computed(() => {
    const v = this.viewDate();
    return `${this.MONTHS[v.getMonth()]} ${v.getFullYear()}`;
  });

  protected readonly calendarDays = computed((): CalendarDay[] => {
    const view = this.viewDate();
    const selected = this.selectedDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const year = view.getFullYear();
    const month = view.getMonth();
    const firstDay = new Date(year, month, 1);

    const minD = this.minDate() ? new Date(this.minDate() + 'T00:00:00') : null;
    const maxD = this.maxDate() ? new Date(this.maxDate() + 'T00:00:00') : null;

    const startDate = new Date(firstDay);
    startDate.setDate(1 - firstDay.getDay());

    const days: CalendarDay[] = [];
    const cursor = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      const d = new Date(cursor);
      d.setHours(0, 0, 0, 0);

      days.push({
        date: d,
        isToday: d.getTime() === today.getTime(),
        isSelected: selected !== null && d.getTime() === selected.getTime(),
        isOutside: d.getMonth() !== month,
        isDisabled: (minD !== null && d < minD) || (maxD !== null && d > maxD)
      });

      cursor.setDate(cursor.getDate() + 1);
    }

    return days;
  });

  private readonly el = inject(ElementRef);
  private onChangeFn: (value: string) => void = () => {};
  private onTouchedFn: () => void = () => {};

  constructor() {
    effect(() => {
      const v = this.value();
      if (v) {
        this.parseDateValue(v);
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.isOpen.set(false);
  }

  protected toggleCalendar(): void {
    if (this.isDisabled() || this.isReadOnly()) return;
    if (!this.isOpen()) {
      const field = this.el.nativeElement.querySelector('.date-picker__field');
      if (field) {
        const rect = (field as HTMLElement).getBoundingClientRect();
        this.calendarPos.set({ top: rect.bottom + 4, left: rect.left, width: rect.width });
      }
    }
    this.isOpen.update(v => !v);
  }

  protected handleBlur(): void {
    this.onTouchedFn();
  }

  protected prevMonth(): void {
    this.viewDate.update(d => {
      const n = new Date(d);
      n.setMonth(n.getMonth() - 1);
      return n;
    });
  }

  protected nextMonth(): void {
    this.viewDate.update(d => {
      const n = new Date(d);
      n.setMonth(n.getMonth() + 1);
      return n;
    });
  }

  protected selectDay(day: CalendarDay): void {
    if (day.isDisabled) return;
    this.selectedDate.set(day.date);
    this.viewDate.set(new Date(day.date.getFullYear(), day.date.getMonth(), 1));

    const iso = this.toIsoString(day.date);
    this.onChangeFn(iso);
    this.dateChange.emit(iso);
    this.isOpen.set(false);
  }

  private parseDateValue(value: string): void {
    const d = new Date(value + (value.includes('T') ? '' : 'T00:00:00'));
    if (!isNaN(d.getTime())) {
      const normalized = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      this.selectedDate.set(normalized);
      this.viewDate.set(new Date(normalized.getFullYear(), normalized.getMonth(), 1));
    }
  }

  private toIsoString(d: Date): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  writeValue(value: string): void {
    if (value) {
      this.parseDateValue(value);
    } else {
      this.selectedDate.set(null);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(): void {}
}
