import type { Meta, StoryObj } from '@storybook/angular';

import { FormFieldComponent } from '@cb/ds-components/form-field';

const meta: Meta<FormFieldComponent & { placeholder: string }> = {
  title: 'UI/Form Field',
  component: FormFieldComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    hint: {
      control: 'text'
    },
    error: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    }
  },
  args: {
    label: 'Name',
    hint: 'Type your full name',
    error: '',
    placeholder: 'Jane Doe'
  },
  render: (args) => ({
    props: args,
    template: `
      <app-form-field [label]="label" [hint]="hint" [error]="error">
        <input
          style="width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 10px; font: inherit;"
          [attr.placeholder]="placeholder"
        />
      </app-form-field>
    `,
    imports: [FormFieldComponent]
  })
};

export default meta;

type Story = StoryObj<FormFieldComponent & { placeholder: string }>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'Name is required',
    hint: ''
  }
};
