import {
  ChangeDetectionStrategy,
  Component,
  input,
  output
} from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import type { ToastData } from '../toast.types';

@Component({
  selector: 'cb-toast-item',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './toast-item.component.html',
  styleUrl: './toast-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastItemComponent {
  readonly toast   = input.required<ToastData>();
  readonly dismiss = output<string>();

  protected close(): void {
    this.dismiss.emit(this.toast().id);
  }
}
