import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from '@cb/ds-components/button';

const meta: Meta<ButtonComponent & { label: string }> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Botões de ação seguindo o Design System Casas Bahia. Disponíveis em 4 variantes: `primary`, `secondary`, `tertiary` e `conversion`.'
      }
    }
  },
  argTypes: {
    variant: {
      description: 'Variante visual do botão.',
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'conversion'],
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary' | 'conversion'" },
        defaultValue: { summary: "'primary'" }
      }
    },
    type: {
      description: 'Atributo `type` nativo do `<button>`.',
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
      table: { type: { summary: "'button' | 'submit' | 'reset'" }, defaultValue: { summary: "'button'" } }
    },
    disabled: {
      description: 'Desativa o botão e aplica opacidade reduzida.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    label: {
      description: 'Texto exibido dentro do botão (via `ng-content`).',
      control: 'text',
      table: { type: { summary: 'string' } }
    }
  },
  args: {
    variant: 'primary',
    type: 'button',
    disabled: false,
    label: 'Button'
  },
  render: (args) => ({
    props: args,
    template: `<cb-button [variant]="variant" [type]="type" [disabled]="disabled">{{ label }}</cb-button>`,
    imports: [ButtonComponent]
  })
};

export default meta;
type Story = StoryObj<ButtonComponent & { label: string }>;

export const Primary: Story = {
  name: 'Primary',
  parameters: { docs: { description: { story: 'Ação principal da tela. Use com moderação — preferencialmente um por view.' } } },
  args: { variant: 'primary', label: 'Primary' }
};

export const Secondary: Story = {
  name: 'Secondary',
  parameters: { docs: { description: { story: 'Ação secundária, complementar ao botão primário.' } } },
  args: { variant: 'secondary', label: 'Secondary' }
};

export const Tertiary: Story = {
  name: 'Tertiary',
  parameters: { docs: { description: { story: 'Ação de baixa ênfase. Estilo de link com underline.' } } },
  args: { variant: 'tertiary', label: 'Tertiary' }
};

export const Conversion: Story = {
  name: 'Conversion',
  parameters: { docs: { description: { story: 'Ação de conversão (ex: comprar, finalizar). Verde Casas Bahia.' } } },
  args: { variant: 'conversion', label: 'Conversion' }
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: { docs: { description: { story: 'Estado desabilitado aplicável a qualquer variante.' } } },
  args: { variant: 'primary', disabled: true, label: 'Disabled' }
};

export const TodasVariantes: Story = {
  name: 'Todas as variantes',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Comparação visual de todas as variantes lado a lado.' } }
  },
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;gap:16px;padding:24px;flex-wrap:wrap">
        <cb-button variant="primary">Primary</cb-button>
        <cb-button variant="secondary">Secondary</cb-button>
        <cb-button variant="tertiary">Tertiary</cb-button>
        <cb-button variant="conversion">Conversion</cb-button>
      </div>
    `,
    imports: [ButtonComponent]
  })
};
