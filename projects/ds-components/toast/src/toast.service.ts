import { Injectable, signal } from '@angular/core';

import type { ToastData, ToastVariant } from './toast.types';

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<ToastData[]>([]);

  private counter = 0;

  show(toast: Omit<ToastData, 'id'>): string {
    const id = `toast-${++this.counter}`;
    const entry: ToastData = { id, dismissible: true, duration: 4000, ...toast };
    this.toasts.update(list => [...list, entry]);

    if (entry.duration && entry.duration > 0) {
      setTimeout(() => this.dismiss(id), entry.duration);
    }

    return id;
  }

  success(title: string, message?: string, duration = 4000): string {
    return this.show({ variant: 'success', title, message, duration });
  }

  error(title: string, message?: string, duration = 6000): string {
    return this.show({ variant: 'error', title, message, duration });
  }

  warning(title: string, message?: string, duration = 5000): string {
    return this.show({ variant: 'warning', title, message, duration });
  }

  info(title: string, message?: string, duration = 4000): string {
    return this.show({ variant: 'info', title, message, duration });
  }

  dismiss(id: string): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }

  clear(): void {
    this.toasts.set([]);
  }
}
