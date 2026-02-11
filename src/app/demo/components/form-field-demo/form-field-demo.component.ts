import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../ui/button/button.component';
import { FormFieldComponent } from '../../../ui/form-field/form-field.component';

@Component({
  selector: 'app-form-field-demo',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldComponent, ButtonComponent],
  templateUrl: './form-field-demo.component.html',
  styleUrl: './form-field-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldDemoComponent {
  readonly name = new FormControl<string>('', { nonNullable: true });
  submitted = false;

  submit(): void {
    this.submitted = true;
  }
}
