import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDemoComponent {}
