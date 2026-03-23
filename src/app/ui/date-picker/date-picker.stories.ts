import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { signal } from '@angular/core';

import { DatePickerComponent } from '@cb/ds-components/date-picker';

const meta: Meta<DatePickerComponent> = {
  title: 'UI/DatePicker',
  component: DatePickerComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({ imports: [DatePickerComponent] })
  ],
  argTypes: {
    label: { control: 'text', description: 'Label do campo' },
    placeholder: { control: 'text', description: 'Placeholder quando vazio' },
    helperText: { control: 'text', description: 'Texto auxiliar abaixo do campo' },
    errorMessage: { control: 'text', description: 'Mensagem de erro (requer isInvalid)' },
    isRequired: { control: 'boolean', description: 'Campo obrigatório' },
    isDisabled: { control: 'boolean', description: 'Campo desabilitado' },
    isInvalid: { control: 'boolean', description: 'Estado de erro' },
    isReadOnly: { control: 'boolean', description: 'Somente leitura' },
    minDate: { control: 'text', description: 'Data mínima (YYYY-MM-DD)' },
    maxDate: { control: 'text', description: 'Data máxima (YYYY-MM-DD)' }
  },
  args: {
    label: 'Data de nascimento',
    placeholder: 'DD/MM/AAAA',
    helperText: '',
    errorMessage: '',
    isRequired: false,
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    minDate: '',
    maxDate: ''
  }
};

export default meta;

type Story = StoryObj<DatePickerComponent>;

export const Default: Story = {
  render: (args) => {
    const selected = signal('');
    return {
      props: { ...args, selected, onDateChange: (d: string) => selected.set(d) },
      template: `
        <cb-date-picker
          [label]="label"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [errorMessage]="errorMessage"
          [isRequired]="isRequired"
          [isDisabled]="isDisabled"
          [isInvalid]="isInvalid"
          [isReadOnly]="isReadOnly"
          [minDate]="minDate"
          [maxDate]="maxDate"
          [value]="selected()"
          (dateChange)="onDateChange($event)"
        />
      `
    };
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Data de nascimento',
    helperText: 'Selecione sua data de nascimento'
  },
  render: (args) => {
    const selected = signal('');
    return {
      props: { ...args, selected, onDateChange: (d: string) => selected.set(d) },
      template: `
        <cb-date-picker
          [label]="label"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [value]="selected()"
          (dateChange)="onDateChange($event)"
        />
      `
    };
  }
};

export const Required: Story = {
  args: {
    label: 'Data de nascimento',
    isRequired: true,
    helperText: 'Campo obrigatório'
  },
  render: (args) => {
    const selected = signal('');
    return {
      props: { ...args, selected, onDateChange: (d: string) => selected.set(d) },
      template: `
        <cb-date-picker
          [label]="label"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [isRequired]="isRequired"
          [value]="selected()"
          (dateChange)="onDateChange($event)"
        />
      `
    };
  }
};

export const Invalid: Story = {
  args: {
    label: 'Data de nascimento',
    isRequired: true,
    isInvalid: true,
    errorMessage: 'Data inválida ou obrigatória'
  },
  render: (args) => {
    const selected = signal('');
    return {
      props: { ...args, selected, onDateChange: (d: string) => selected.set(d) },
      template: `
        <cb-date-picker
          [label]="label"
          [placeholder]="placeholder"
          [isRequired]="isRequired"
          [isInvalid]="isInvalid"
          [errorMessage]="errorMessage"
          [value]="selected()"
          (dateChange)="onDateChange($event)"
        />
      `
    };
  }
};

export const Disabled: Story = {
  args: {
    label: 'Data de nascimento',
    isDisabled: true
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-date-picker
        [label]="label"
        [placeholder]="placeholder"
        [isDisabled]="isDisabled"
      />
    `
  })
};

export const ReadOnly: Story = {
  args: {
    label: 'Data de nascimento',
    isReadOnly: true
  },
  render: (args) => ({
    props: { ...args, preselected: '2024-06-15' },
    template: `
      <cb-date-picker
        [label]="label"
        [placeholder]="placeholder"
        [isReadOnly]="isReadOnly"
        [value]="preselected"
      />
    `
  })
};

export const WithMinMaxDate: Story = {
  args: {
    label: 'Data de entrega',
    helperText: 'Selecione uma data nos próximos 30 dias',
    minDate: new Date().toISOString().split('T')[0],
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  },
  render: (args) => {
    const selected = signal('');
    return {
      props: { ...args, selected, onDateChange: (d: string) => selected.set(d) },
      template: `
        <cb-date-picker
          [label]="label"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [minDate]="minDate"
          [maxDate]="maxDate"
          [value]="selected()"
          (dateChange)="onDateChange($event)"
        />
      `
    };
  }
};

export const PreSelected: Story = {
  args: {
    label: 'Data de nascimento',
    helperText: 'Você pode alterar a data selecionada'
  },
  render: (args) => {
    const selected = signal('1990-05-20');
    return {
      props: { ...args, selected, onDateChange: (d: string) => selected.set(d) },
      template: `
        <cb-date-picker
          [label]="label"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [value]="selected()"
          (dateChange)="onDateChange($event)"
        />
      `
    };
  }
};
