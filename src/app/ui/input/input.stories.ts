import type { Meta, StoryObj } from '@storybook/angular';

import { InputComponent } from '@cb/ds-components/input';

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    theme: {
      control: 'select',
      options: ['default', 'error', 'warning', 'success']
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel']
    },
    inputChange: { action: 'inputChange' }
  },
  args: {
    label: 'Nome completo',
    placeholder: 'Ex: João da Silva',
    hint: 'Digite seu nome completo',
    error: '',
    disabled: false,
    theme: 'default',
    type: 'text'
  },
  render: (args) => ({
    props: args,
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [hint]="hint"
        [error]="error"
        [disabled]="disabled"
        [theme]="theme"
        [type]="type"
        (inputChange)="inputChange($event)"
        style="width: 320px;"
      />
    `,
    imports: [InputComponent]
  })
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {};

export const ComErro: Story = {
  args: {
    error: 'Campo obrigatório',
    hint: ''
  }
};

export const ComAviso: Story = {
  args: {
    theme: 'warning',
    hint: 'Verifique o valor informado'
  }
};

export const Sucesso: Story = {
  args: {
    theme: 'success',
    hint: 'CPF válido'
  }
};

export const Desabilitado: Story = {
  args: {
    disabled: true,
    hint: ''
  }
};

export const Senha: Story = {
  args: {
    label: 'Senha',
    placeholder: '••••••••',
    hint: 'Mínimo 8 caracteres',
    type: 'password'
  }
};
