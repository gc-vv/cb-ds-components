import type { Meta, StoryObj } from '@storybook/angular';

import { AlertComponent } from '@cb/ds-components/alert';

const meta: Meta<AlertComponent> = {
  title: 'UI/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    theme: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error']
    },
    closeAlert: {
      action: 'closeAlert'
    }
  },
  args: {
    title: 'Título do alerta',
    description: 'Descrição do alerta com texto auxiliar.',
    theme: 'info'
  },
  render: (args) => ({
    props: args,
    template:
      '<app-alert [title]="title" [description]="description" [theme]="theme" (closeAlert)="closeAlert($event)" />',
    imports: [AlertComponent]
  })
};

export default meta;

type Story = StoryObj<AlertComponent>;

export const Info: Story = {
  args: {
    theme: 'info'
  }
};

export const Success: Story = {
  args: {
    theme: 'success'
  }
};

export const Warning: Story = {
  args: {
    theme: 'warning'
  }
};

export const Error: Story = {
  args: {
    theme: 'error'
  }
};
