import { Routes } from '@angular/router';
 
import { ButtonDemoComponent } from './demo/components/button-demo/button-demo.component';
import { FormFieldDemoComponent } from './demo/components/form-field-demo/form-field-demo.component';

export const routes: Routes = [
  {
    path: 'components/button',
    component: ButtonDemoComponent
  },
  {
    path: 'components/form-field',
    component: FormFieldDemoComponent
  }
];
