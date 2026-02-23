import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from '@cb/ds-components/button';

const meta: Meta<ButtonComponent & { label: string }> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger']
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    }
  },
  args: {
    variant: 'primary',
    type: 'button',
    disabled: false,
    label: 'Button'
  },
  render: (args) => ({
    props: args,
    template:
      '<app-button [variant]="variant" [type]="type" [disabled]="disabled">{{ label }}</app-button>',
    imports: [ButtonComponent]
  })
};

export default meta;

type Story = StoryObj<ButtonComponent & { label: string }>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary'
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled'
  }
};
