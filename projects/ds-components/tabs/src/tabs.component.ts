import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
  signal
} from '@angular/core';

import type { Tab } from './tabs.types';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  readonly tabs = input.required<Tab[]>();
  readonly activeId = input<string>('');

  protected readonly activeTabId = signal<string>('');

  @Output() readonly tabChange = new EventEmitter<Tab>();

  protected selectTab(tab: Tab): void {
    if (tab.disabled) return;
    this.activeTabId.set(tab.id);
    this.tabChange.emit(tab);
  }

  protected isActive(tab: Tab): boolean {
    const active = this.activeTabId() || this.activeId() || this.tabs()[0]?.id;
    return tab.id === active;
  }

  protected trackById(_: number, tab: Tab): string {
    return tab.id;
  }
}
