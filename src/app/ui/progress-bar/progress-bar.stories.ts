import type { Meta, StoryObj } from '@storybook/angular';

import { ProgressBarComponent } from '@cb/ds-components/progress-bar';

const meta: Meta<ProgressBarComponent> = {
  title: 'UI/ProgressBar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente visual que exibe o progresso de uma tarefa ou processo em andamento.'
      }
    }
  },
  argTypes: {
    value: {
      control: 'number',
      description: 'Valor numérico, entre 0 e 100, que será utilizado como percentual da barra de progresso.'
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Define a espessura da barra de progresso (variante responsiva).'
    },
    showValue: {
      control: 'boolean',
      description: 'Indica se o componente irá exibir ou não um texto visível do valor informado em percentual (ex.: 80%) (variante responsiva).'
    },
    className: {
      control: 'text',
      description: 'Classe que o componente receberá.'
    }
  },
  args: {
    value: 50,
    size: 'medium',
    showValue: false,
    className: ''
  }
};

export default meta;

type Story = StoryObj<ProgressBarComponent>;

export const Default: Story = {
  args: {
    value: 50,
    size: 'medium'
  }
};

export const Sizes: Story = {
  name: 'Tamanho',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 300px">
        <cb-progress-bar [value]="50" size="small"></cb-progress-bar>
        <cb-progress-bar [value]="50" size="medium"></cb-progress-bar>
        <cb-progress-bar [value]="50" size="large"></cb-progress-bar>
      </div>
    `,
    imports: [ProgressBarComponent]
  })
};

export const WithValue: Story = {
  name: 'Com valor visível',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 350px">
        <span style="font-size: 14px; color: #595959">Sem valor visível:</span>
        <cb-progress-bar [value]="50" size="small"></cb-progress-bar>
        <cb-progress-bar [value]="50" size="medium"></cb-progress-bar>
        <cb-progress-bar [value]="50" size="large"></cb-progress-bar>

        <span style="font-size: 14px; color: #595959; margin-top: 4px">Com valor visível:</span>
        <cb-progress-bar [value]="50" size="small" [showValue]="true"></cb-progress-bar>
        <cb-progress-bar [value]="50" size="medium" [showValue]="true"></cb-progress-bar>
        <cb-progress-bar [value]="50" size="large" [showValue]="true"></cb-progress-bar>
      </div>
    `,
    imports: [ProgressBarComponent]
  })
};
