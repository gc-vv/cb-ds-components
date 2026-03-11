import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  signal
} from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

import type { AccordionHeadingLevel, AccordionItem } from './accordion.types';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  readonly items = input.required<AccordionItem[]>();

  readonly isMultiple = input(true);

  readonly className = input<string>('');

  readonly headingLevel = input<AccordionHeadingLevel>('h2');

  private readonly expandedIndexes = signal<Set<number>>(new Set());

  protected isExpanded(index: number): boolean {
    return this.expandedIndexes().has(index);
  }

  protected toggle(index: number): void {
    const current = this.expandedIndexes();

    if (this.isMultiple()) {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      this.expandedIndexes.set(next);
      return;
    }

    if (current.has(index)) {
      return;
    }

    this.expandedIndexes.set(new Set([index]));
  }

  protected getButtonId(index: number): string {
    return `accordion-trigger-${index}`;
  }

  protected getPanelId(index: number): string {
    return `accordion-panel-${index}`;
  }

  constructor() {
    effect(() => {
      const items = this.items();
      const isMultiple = this.isMultiple();

      if (isMultiple) {
        return;
      }

      if (items.length === 0) {
        this.expandedIndexes.set(new Set());
        return;
      }

      const current = this.expandedIndexes();
      if (current.size === 0) {
        this.expandedIndexes.set(new Set([0]));
        return;
      }

      const activeIndex = Array.from(current)[0];
      if (activeIndex < 0 || activeIndex >= items.length) {
        this.expandedIndexes.set(new Set([0]));
      } else if (current.size > 1) {
        this.expandedIndexes.set(new Set([activeIndex]));
      }
    });
  }
}
