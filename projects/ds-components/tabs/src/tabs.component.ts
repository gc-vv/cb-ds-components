import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
  signal
} from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

import type { Tab, TabChangeEvent, TabSize, TabVariant } from './tabs.types';

@Component({
  selector: 'cb-tabs',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
  readonly tabs      = input.required<Tab[]>();
  readonly activeId  = input<string>('');
  readonly variant   = input<TabVariant>('underline');
  readonly size      = input<TabSize>('medium');
  readonly className = input<string>('');

  readonly onTabChange = output<TabChangeEvent>();

  protected readonly activeTabId = signal<string>('');

  ngOnInit(): void {
    const initial = this.activeId() || this.tabs()[0]?.id || '';
    this.activeTabId.set(initial);
  }

  protected selectTab(tab: Tab): void {
    if (tab.disabled) return;
    const previousId = this.activeTabId();
    this.activeTabId.set(tab.id);
    this.onTabChange.emit({ previousId, currentTab: tab });
  }

  protected isActive(tab: Tab): boolean {
    return tab.id === this.activeTabId();
  }

  protected trackById(_: number, tab: Tab): string {
    return tab.id;
  }
}
