import type { Meta, StoryObj } from '@storybook/angular';

import { FormControlComponent } from '@cb/ds-components/form-control';

const meta: Meta<FormControlComponent> = {
  title: 'UI/FormControl',
  component: FormControlComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the form field'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed when isInvalid is true'
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the field'
    },
    isRequired: {
      control: 'boolean',
      description: 'Whether the field is required'
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the field is disabled'
    },
    isInvalid: {
      control: 'boolean',
      description: 'Whether the field is in invalid state'
    },
    isReadOnly: {
      control: 'boolean',
      description: 'Whether the field is read-only'
    },
    showRequiredIndicator: {
      control: 'boolean',
      description: 'Show asterisk (*) for required fields'
    },
    id: {
      control: 'text',
      description: 'ID for the form field'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    label: 'E-mail',
    errorMessage: '',
    helperText: 'Digite seu melhor e-mail',
    isRequired: false,
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    showRequiredIndicator: true,
    id: 'email-field',
    className: ''
  }
};

export default meta;

type Story = StoryObj<FormControlComponent>;

export const WithInput: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <input
          type="email"
          [id]="id"
          placeholder="Digite seu nome"
          [disabled]="isDisabled"
          [readonly]="isReadOnly"
          style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit;"
        />
      </cb-form-control>
    `
  })
};

export const Required: Story = {
  args: {
    label: 'E-mail',
    helperText: 'Digite seu melhor e-mail',
    isRequired: true,
    errorMessage: 'Campo obrigatório'
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <input
          type="email"
          [id]="id"
          placeholder="Digite seu nome"
          [disabled]="isDisabled"
          [readonly]="isReadOnly"
          [attr.aria-required]="isRequired"
          style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit;"
        />
      </cb-form-control>
    `
  })
};

export const WithError: Story = {
  args: {
    label: 'E-mail',
    helperText: 'Digite seu melhor e-mail',
    isRequired: true,
    isInvalid: true,
    errorMessage: 'Campo obrigatório'
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <input
          type="email"
          [id]="id"
          placeholder="Digite seu nome"
          [disabled]="isDisabled"
          [readonly]="isReadOnly"
          [attr.aria-required]="isRequired"
          [attr.aria-invalid]="isInvalid"
          style="width: 100%; padding: 10px 12px; border: 1px solid #E53935; border-radius: 4px; font-size: 14px; font-family: inherit;"
        />
      </cb-form-control>
    `
  })
};

export const Disabled: Story = {
  args: {
    label: 'E-mail',
    helperText: 'Digite seu melhor e-mail',
    isDisabled: true
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <input
          type="email"
          [id]="id"
          placeholder="Digite seu nome"
          [disabled]="isDisabled"
          [readonly]="isReadOnly"
          style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit; opacity: 0.5; cursor: not-allowed;"
        />
      </cb-form-control>
    `
  })
};

export const ReadOnly: Story = {
  args: {
    label: 'E-mail',
    helperText: 'Este campo é somente leitura',
    isReadOnly: true
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <input
          type="email"
          [id]="id"
          value="usuario@exemplo.com"
          [disabled]="isDisabled"
          [readonly]="isReadOnly"
          [attr.aria-readonly]="isReadOnly"
          style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit; background: #f5f5f5;"
        />
      </cb-form-control>
    `
  })
};

export const WithTextarea: Story = {
  args: {
    label: 'Descrição',
    helperText: 'Digite sua descrição',
    isRequired: true,
    id: 'description-field'
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <textarea
          [id]="id"
          placeholder="Digite sua descrição"
          rows="4"
          [disabled]="isDisabled"
          [readonly]="isReadOnly"
          [attr.aria-required]="isRequired"
          style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit; resize: vertical;"
        ></textarea>
      </cb-form-control>
    `
  })
};

export const WithSelect: Story = {
  args: {
    label: 'Selecione',
    helperText: 'Selecione uma opção',
    isRequired: true,
    id: 'select-field'
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <select
          [id]="id"
          [disabled]="isDisabled"
          [attr.aria-required]="isRequired"
          style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit; background: white; cursor: pointer;"
        >
          <option value="">Selecione uma opção</option>
          <option value="1">Opção 1</option>
          <option value="2">Opção 2</option>
          <option value="3">Opção 3</option>
        </select>
      </cb-form-control>
    `
  })
};

export const WithoutHelperText: Story = {
  args: {
    label: 'E-mail',
    helperText: '',
    isRequired: true
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        [label]="label"
        [errorMessage]="errorMessage"
        [helperText]="helperText"
        [isRequired]="isRequired"
        [isDisabled]="isDisabled"
        [isInvalid]="isInvalid"
        [isReadOnly]="isReadOnly"
        [showRequiredIndicator]="showRequiredIndicator"
        [id]="id"
        [className]="className"
      >
        <input
          type="email"
          [id]="id"
          placeholder="Digite seu e-mail"
          [disabled]="isDisabled"
          [readonly]="isReadOnly"
          [attr.aria-required]="isRequired"
          style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit;"
        />
      </cb-form-control>
    `
  })
};
