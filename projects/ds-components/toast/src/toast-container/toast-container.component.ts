import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

import { ToastService } from '../toast.service';
import { ToastItemComponent } from '../toast-item/toast-item.component';
import type { ToastPosition } from '../toast.types';

@Component({
  selector: 'cb-toast-container',
  standalone: true,
  imports: [NgClass, NgFor, ToastItemComponent],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastContainerComponent {
  readonly position  = input<ToastPosition>('top-right');
  readonly className = input<string>('');

  protected readonly toastService = inject(ToastService);

  protected dismiss(id: string): void {
    this.toastService.dismiss(id);
  }

  protected trackById(_: number, item: { id: string }): string {
    return item.id;
  }
}
