import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '@cb/ds-components/button';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDemoComponent {}
