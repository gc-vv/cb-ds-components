import type { Meta, StoryObj } from '@storybook/angular';

import { ToggleComponent } from '@cb/ds-components/toggle';

const meta: Meta<ToggleComponent> = {
  title: 'UI/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Controle deslizante que representa um estado ligado/desligado. Compatível com `ControlValueAccessor` para uso em formulários reativos e template-driven.'
      }
    }
  },
  argTypes: {
    label: {
      description: 'Texto descritivo exibido ao lado do toggle.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    disabled: {
      description: 'Desativa a interação e aplica opacidade reduzida.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    size: {
      description: 'Tamanho do toggle.',
      control: { type: 'radio' },
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } }
    },
    labelPosition: {
      description: 'Posição do label em relação ao toggle.',
      control: { type: 'radio' },
      options: ['left', 'right'],
      table: { type: { summary: "'left' | 'right'" }, defaultValue: { summary: "'right'" } }
    },
    className: {
      description: 'Classe CSS extra aplicada ao elemento raiz.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    changed: {
      description: 'Emite o novo valor booleano toda vez que o toggle é alternado.',
      table: { type: { summary: 'OutputEmitterRef<boolean>' }, category: 'Outputs' }
    }
  },
  args: {
    label: 'Ativar notificações',
    disabled: false,
    size: 'md',
    labelPosition: 'right',
    className: ''
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding:24px">
        <cb-toggle
          [label]="label"
          [disabled]="disabled"
          [size]="size"
          [labelPosition]="labelPosition"
          [className]="className"
        ></cb-toggle>
      </div>
    `,
    imports: [ToggleComponent]
  })
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: { story: 'Use os controles abaixo para customizar o Toggle.' }
    }
  }
};

export const Ligado: Story = {
  name: 'Ligado',
  parameters: {
    docs: { description: { story: 'Estado inicial ativo.' } }
  },
  render: () => ({
    template: `
      <div style="padding:24px">
        <cb-toggle label="Modo escuro" [checked]="true"></cb-toggle>
      </div>
    `,
    props: {},
    imports: [ToggleComponent]
  })
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  parameters: {
    docs: { description: { story: 'Define `disabled: true` para bloquear a interação.' } }
  },
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;padding:24px">
        <cb-toggle label="Desabilitado (off)" [disabled]="true"></cb-toggle>
        <cb-toggle label="Desabilitado (on)" [disabled]="true"></cb-toggle>
      </div>
    `,
    props: {},
    imports: [ToggleComponent]
  })
};

export const Tamanhos: Story = {
  name: 'Tamanhos',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Comparação entre os tamanhos `sm` e `md`.' } }
  },
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;gap:32px;padding:24px">
        <cb-toggle label="Small"  size="sm"></cb-toggle>
        <cb-toggle label="Medium" size="md"></cb-toggle>
      </div>
    `,
    props: {},
    imports: [ToggleComponent]
  })
};

export const LabelEsquerda: Story = {
  name: 'Label à esquerda',
  parameters: {
    docs: { description: { story: 'Define `labelPosition: "left"` para posicionar o texto antes do toggle.' } }
  },
  args: {
    label: 'Receber e-mails',
    labelPosition: 'left',
    size: 'md',
    disabled: false
  }
};

export const SemLabel: Story = {
  name: 'Sem label',
  parameters: {
    docs: { description: { story: 'Sem `label`, apenas o controle é exibido.' } }
  },
  args: {
    label: '',
    size: 'md',
    disabled: false
  }
};
