import { moduleMetadata } from '@storybook/angular';
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
  },
  decorators: [
    moduleMetadata({ imports: [FormControlComponent] })
  ]
};

export default meta;

type Story = StoryObj<InputComponent>;

export const WithHelperText: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ng-template #emailIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
        </svg>
      </ng-template>
      <cb-form-control label="E-mail" helperText="Digite seu melhor e-mail" id="email-input">
        <cb-input
          [id]="'email-input'"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [isInvalid]="isInvalid"
          [isReadOnly]="isReadOnly"
          [type]="type"
          [elementDirection]="'right'"
          [element]="emailIcon"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};

export const WithPlaceholder: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control label="E-mail" id="email-placeholder">
        <cb-input
          [id]="'email-placeholder'"
          [placeholder]="'exemplo@exemplo.com'"
          [type]="'email'"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};

export const Required: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control label="E-mail" [isRequired]="true" helperText="Digite seu melhor e-mail" id="email-required">
        <cb-input
          [id]="'email-required'"
          [placeholder]="''"
          [type]="'email'"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};

export const Invalid: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control label="E-mail" [isRequired]="true" [isInvalid]="true" errorMessage="Campo obrigatório" id="email-invalid">
        <cb-input
          [id]="'email-invalid'"
          [isInvalid]="true"
          [placeholder]="''"
          [type]="'email'"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};

export const WithElementLeft: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ng-template #emailIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
        </svg>
      </ng-template>
      <cb-form-control label="E-mail" id="email-icon-left">
        <cb-input
          [id]="'email-icon-left'"
          [placeholder]="'exemplo@exemplo.com'"
          [type]="'email'"
          [elementDirection]="'left'"
          [element]="emailIcon"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};

export const WithElementRight: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ng-template #emailIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
        </svg>
      </ng-template>
      <cb-form-control label="E-mail" id="email-icon-right">
        <cb-input
          [id]="'email-icon-right'"
          [placeholder]="'exemplo@exemplo.com'"
          [type]="'email'"
          [elementDirection]="'right'"
          [element]="emailIcon"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ng-template #emailIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
        </svg>
      </ng-template>
      <cb-form-control label="E-mail" [isDisabled]="true" id="email-disabled">
        <cb-input
          [id]="'email-disabled'"
          [placeholder]="'exemplo@exemplo.com'"
          [disabled]="true"
          [type]="'email'"
          [elementDirection]="'right'"
          [element]="emailIcon"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};

export const ReadOnly: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ng-template #emailIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
        </svg>
      </ng-template>
      <cb-form-control label="E-mail" [isReadOnly]="true" helperText="Este campo é somente leitura" id="email-readonly">
        <cb-input
          [id]="'email-readonly'"
          [placeholder]="'baianinho@gcb.com'"
          [isReadOnly]="true"
          [type]="'email'"
          [elementDirection]="'right'"
          [element]="emailIcon"
        />
      </cb-form-control>
    `,
    imports: [InputComponent]
  })
};
