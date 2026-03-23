export type DatePickerMode = 'single' | 'range';

export interface DateRange {
  start: string;
  end: string;
}

export interface CalendarDay {
  date: Date;
  isToday: boolean;
  isSelected: boolean;
  isOutside: boolean;
  isDisabled: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
}
