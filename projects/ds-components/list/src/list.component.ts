import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output
} from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { ListItem } from './list.types';

@Component({
  selector: 'cb-list',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  readonly items = input<ListItem[]>([]);
  readonly selectable = input<boolean>(false);
  readonly showDividers = input<boolean>(false);
  readonly dense = input<boolean>(false);
  readonly className = input<string>('');

  @Output() readonly itemClick = new EventEmitter<ListItem>();
  @Output() readonly itemSelect = new EventEmitter<ListItem>();

  protected handleItemClick(item: ListItem): void {
    if (item.disabled) return;
    
    this.itemClick.emit(item);
    
    if (this.selectable()) {
      this.itemSelect.emit(item);
    }
  }

  protected trackByFn(index: number, item: ListItem): string | number {
    return item.id;
  }
}
