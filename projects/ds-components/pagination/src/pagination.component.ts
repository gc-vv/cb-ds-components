import { ChangeDetectionStrategy, Component, computed, effect, input, output, signal } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import type { PageChangeEvent } from './pagination.types';

@Component({
  selector: 'cb-pagination',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  readonly totalPages = input.required<number>();
  
  readonly currentPage = input<number>(1);
  
  readonly maxVisiblePages = input<number>(7);
  
  readonly showFirstLast = input<boolean>(true);
  
  readonly className = input<string>('');

  readonly pageChange = output<PageChangeEvent>();

  private readonly internalPage = signal<number>(1);

  protected readonly activePage = computed(() => this.internalPage());

  constructor() {
    effect(() => {
      const total = this.totalPages();
      const current = this.currentPage();
      if (current >= 1 && current <= total) {
        this.internalPage.set(current);
      }
    }, { allowSignalWrites: true });
  }

  protected readonly visiblePages = computed(() => {
    const total = this.totalPages();
    const current = this.activePage();
    const maxVisible = this.maxVisiblePages();

    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];
    const leftEllipsis = current > 3;
    const rightEllipsis = current < total - 2;

    pages.push(1);

    if (leftEllipsis) {
      pages.push('ellipsis');
    }

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    if (rightEllipsis) {
      pages.push('ellipsis');
    }

    if (!pages.includes(total)) {
      pages.push(total);
    }

    return pages;
  });

  protected goToPage(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.activePage()) {
      return;
    }

    const previousPage = this.activePage();
    this.internalPage.set(page);
    this.pageChange.emit({ page, previousPage });
  }

  protected goToPrevious(): void {
    const current = this.activePage();
    if (current > 1) {
      this.goToPage(current - 1);
    }
  }

  protected goToNext(): void {
    const current = this.activePage();
    if (current < this.totalPages()) {
      this.goToPage(current + 1);
    }
  }

  protected isEllipsis(item: number | 'ellipsis'): boolean {
    return item === 'ellipsis';
  }

  protected asNumber(item: number | 'ellipsis'): number {
    return item as number;
  }
}
