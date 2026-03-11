import type { Meta, StoryObj } from '@storybook/angular';

import { InputComponent } from '@cb/ds-components/input';
import { FormControlComponent } from '@cb/ds-components/form-control';

const meta: Meta<InputComponent> = {
  title: 'UI/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel']
    },
    elementDirection: {
      control: 'select',
      options: ['left', 'right']
    }
  },
  args: {
    placeholder: 'exemplo@exemplo.com',
    disabled: false,
    isInvalid: false,
    isReadOnly: false,
    type: 'email',
    elementDirection: 'right'
  }
};

export default meta;

type Story = StoryObj<InputComponent>;

export const WithHelperText: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        helperText="Digite seu melhor e-mail"
        id="email-input"
      >
        <cb-input
          [id]="'email-input'"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [isInvalid]="isInvalid"
          [isReadOnly]="isReadOnly"
          [type]="type"
        />
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};

export const WithPlaceholder: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        id="email-placeholder"
      >
        <cb-input
          [id]="'email-placeholder'"
          [placeholder]="'exemplo@exemplo.com'"
          [type]="'email'"
        />
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};

export const Required: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        [isRequired]="true"
        helperText="Digite seu melhor e-mail"
        id="email-required"
      >
        <cb-input
          [id]="'email-required'"
          [placeholder]="''"
          [type]="'email'"
        />
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};

export const Invalid: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        [isRequired]="true"
        [isInvalid]="true"
        errorMessage="Campo obrigatório"
        id="email-invalid"
      >
        <cb-input
          [id]="'email-invalid'"
          [isInvalid]="true"
          [placeholder]="''"
          [type]="'email'"
        />
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};

export const WithElementLeft: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        id="email-icon-left"
      >
        <cb-input
          [id]="'email-icon-left'"
          [placeholder]="'Digite seu Email'"
          [type]="'email'"
          [elementDirection]="'left'"
        >
          <ng-template #element>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="16" height="12" rx="2"/>
              <path d="M2 6l8 5 8-5"/>
            </svg>
          </ng-template>
        </cb-input>
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};

export const WithElementRight: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        id="email-icon-right"
      >
        <cb-input
          [id]="'email-icon-right'"
          [placeholder]="'Digite seu Email'"
          [type]="'email'"
          [elementDirection]="'right'"
        >
          <ng-template #element>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="16" height="12" rx="2"/>
              <path d="M2 6l8 5 8-5"/>
            </svg>
          </ng-template>
        </cb-input>
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        [isDisabled]="true"
        id="email-disabled"
      >
        <cb-input
          [id]="'email-disabled'"
          [placeholder]="'Digite seu Email'"
          [disabled]="true"
          [type]="'email'"
          [elementDirection]="'right'"
        >
          <ng-template #element>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="16" height="12" rx="2"/>
              <path d="M2 6l8 5 8-5"/>
            </svg>
          </ng-template>
        </cb-input>
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};

export const ReadOnly: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="E-mail"
        [isReadOnly]="true"
        helperText="Este campo é somente leitura"
        id="email-readonly"
      >
        <cb-input
          [id]="'email-readonly'"
          [placeholder]="'baianinho@gcb.com'"
          [isReadOnly]="true"
          [type]="'email'"
          [elementDirection]="'right'"
        >
          <ng-template #element>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="16" height="12" rx="2"/>
              <path d="M2 6l8 5 8-5"/>
            </svg>
          </ng-template>
        </cb-input>
      </cb-form-control>
    `,
    imports: [InputComponent, FormControlComponent]
  })
};
