import type { Meta, StoryObj } from '@storybook/angular';

import { CheckboxComponent } from '@cb/ds-components/checkbox';

const meta: Meta<CheckboxComponent> = {
  title: 'UI/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    toggle: {
      action: 'toggle'
    }
  },
  args: {
    label: 'Aceito os termos e condições',
    disabled: false
  },
  render: (args) => ({
    props: args,
    template:
      '<app-checkbox [label]="label" [disabled]="disabled" (toggle)="toggle($event)" />',
    imports: [CheckboxComponent]
  })
};

export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {};

export const Checked: Story = {
  render: (args) => ({
    props: args,
    template: `
      <app-checkbox
        [label]="label"
        [disabled]="disabled"
        (toggle)="toggle($event)"
        [ngModel]="true"
      />
    `,
    imports: [CheckboxComponent]
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const SemLabel: Story = {
  args: {
    label: ''
  }
};
