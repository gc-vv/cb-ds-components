import { Routes } from '@angular/router';
 
import { ButtonDemoComponent } from './demo/components/button-demo/button-demo.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { FormFieldDemoComponent } from './demo/components/form-field-demo/form-field-demo.component';

export const routes: Routes = [
  {
    path: 'design-system',
    component: DesignSystemComponent
  },
  {
    path: 'components/button',
    component: ButtonDemoComponent
  },
  {
    path: 'components/form-field',
    component: FormFieldDemoComponent
  }
];
