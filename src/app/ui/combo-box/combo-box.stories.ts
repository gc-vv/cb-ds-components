import type { Meta, StoryObj } from '@storybook/angular';

import { ComboBoxComponent, type ComboBoxOption } from '@cb/ds-components/combo-box';

const options: ComboBoxOption[] = [
  { label: 'Televisão', value: 'tv' },
  { label: 'Geladeira', value: 'fridge' },
  { label: 'Máquina de Lavar', value: 'washer' },
  { label: 'Ar-Condicionado', value: 'ac' },
  { label: 'Micro-ondas', value: 'microwave' },
  { label: 'Fogão', value: 'stove' }
];

const meta: Meta<ComboBoxComponent> = {
  title: 'UI/Combo Box',
  component: ComboBoxComponent,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    select: { action: 'select' }
  },
  args: {
    options,
    placeholder: 'Selecione um produto',
    label: 'Categoria',
    disabled: false,
    required: false
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 320px; padding-bottom: 240px;">
        <app-combo-box
          [options]="options"
          [placeholder]="placeholder"
          [label]="label"
          [disabled]="disabled"
          [required]="required"
          (select)="select($event)"
        />
      </div>
    `,
    imports: [ComboBoxComponent]
  })
};

export default meta;

type Story = StoryObj<ComboBoxComponent>;

export const Default: Story = {};

export const Obrigatorio: Story = {
  args: { required: true }
};

export const Desabilitado: Story = {
  args: { disabled: true }
};

export const SemLabel: Story = {
  args: { label: '' }
};
