import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';

import type { AlertTheme } from './alert.types';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();

  readonly theme = input<AlertTheme>('info');

  @Output() readonly closeAlert = new EventEmitter<boolean>();

  protected onClickClose(): void {
    this.closeAlert.emit(true);
  }
}
