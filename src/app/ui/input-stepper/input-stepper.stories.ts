import type { Meta, StoryObj } from '@storybook/angular';

import { InputStepperComponent } from '@cb/ds-components/input-stepper';
import { FormControlComponent } from '@cb/ds-components/form-control';

const meta: Meta<InputStepperComponent> = {
  title: 'UI/InputStepper',
  component: InputStepperComponent,
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'Valor mínimo'
    },
    max: {
      control: 'number',
      description: 'Valor máximo'
    },
    step: {
      control: 'number',
      description: 'Incremento/decremento'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilitar o stepper'
    },
    valueChange: {
      action: 'valueChange',
      description: 'Evento emitido quando o valor muda'
    }
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  }
};

export default meta;

type Story = StoryObj<InputStepperComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-input-stepper
        [min]="min"
        [max]="max"
        [step]="step"
        [disabled]="disabled"
        (valueChange)="valueChange($event)"
      />
    `,
    imports: [InputStepperComponent]
  })
};

export const WithFormControl: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="Quantidade"
        helperText="Selecione a quantidade desejada"
        id="quantity-stepper"
      >
        <cb-input-stepper
          [id]="'quantity-stepper'"
          [min]="0"
          [max]="10"
          [step]="1"
        />
      </cb-form-control>
    `,
    imports: [InputStepperComponent, FormControlComponent]
  })
};

export const CustomRange: Story = {
  args: {
    min: 1,
    max: 10,
    step: 1
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="Número de pessoas"
        helperText="Mínimo 1, máximo 10"
        id="people-stepper"
      >
        <cb-input-stepper
          [id]="'people-stepper'"
          [min]="min"
          [max]="max"
          [step]="step"
        />
      </cb-form-control>
    `,
    imports: [InputStepperComponent, FormControlComponent]
  })
};

export const LargeStep: Story = {
  args: {
    min: 0,
    max: 1000,
    step: 10
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="Preço"
        helperText="Incrementos de R$ 10,00"
        id="price-stepper"
      >
        <cb-input-stepper
          [id]="'price-stepper'"
          [min]="min"
          [max]="max"
          [step]="step"
        />
      </cb-form-control>
    `,
    imports: [InputStepperComponent, FormControlComponent]
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="Quantidade"
        helperText="Este campo está desabilitado"
        [isDisabled]="true"
        id="disabled-stepper"
      >
        <cb-input-stepper
          [id]="'disabled-stepper'"
          [min]="0"
          [max]="10"
          [step]="1"
          [disabled]="disabled"
        />
      </cb-form-control>
    `,
    imports: [InputStepperComponent, FormControlComponent]
  })
};

export const SmallRange: Story = {
  args: {
    min: 0,
    max: 5,
    step: 1
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="Avaliação"
        helperText="De 0 a 5 estrelas"
        id="rating-stepper"
      >
        <cb-input-stepper
          [id]="'rating-stepper'"
          [min]="min"
          [max]="max"
          [step]="step"
        />
      </cb-form-control>
    `,
    imports: [InputStepperComponent, FormControlComponent]
  })
};

export const NegativeRange: Story = {
  args: {
    min: -10,
    max: 10,
    step: 1
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="Temperatura"
        helperText="De -10°C a 10°C"
        id="temperature-stepper"
      >
        <cb-input-stepper
          [id]="'temperature-stepper'"
          [min]="min"
          [max]="max"
          [step]="step"
        />
      </cb-form-control>
    `,
    imports: [InputStepperComponent, FormControlComponent]
  })
};

export const DecimalStep: Story = {
  args: {
    min: 0,
    max: 10,
    step: 0.5
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-form-control
        label="Volume"
        helperText="Incrementos de 0.5"
        id="volume-stepper"
      >
        <cb-input-stepper
          [id]="'volume-stepper'"
          [min]="min"
          [max]="max"
          [step]="step"
        />
      </cb-form-control>
    `,
    imports: [InputStepperComponent, FormControlComponent]
  })
};
