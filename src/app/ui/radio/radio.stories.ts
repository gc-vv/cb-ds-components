import type { Meta, StoryObj } from '@storybook/angular';

import { RadioComponent } from '@cb/ds-components/radio';

const meta: Meta<RadioComponent> = {
  title: 'UI/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de seleção única. Utilizado quando o usuário deve escolher apenas uma opção de um grupo.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido ao lado do radio button.'
    },
    value: {
      control: 'text',
      description: 'Valor associado ao radio button.'
    },
    name: {
      control: 'text',
      description: 'Nome do grupo de radio buttons.'
    },
    isChecked: {
      control: 'boolean',
      description: 'Define se o radio button está selecionado (modo controlado).'
    },
    isDisabled: {
      control: 'boolean',
      description: 'Se `true`, o radio button será desabilitado.'
    }
  },
  args: {
    label: 'Opção 1',
    value: 'option1',
    name: 'group',
    isChecked: false,
    isDisabled: false
  }
};

export default meta;

type Story = StoryObj<RadioComponent>;

export const Default: Story = {
  args: {
    label: 'Opção 1',
    isChecked: false
  }
};

export const Checked: Story = {
  name: 'Selecionado',
  args: {
    label: 'Opção 1',
    isChecked: true
  }
};

export const Disabled: Story = {
  name: 'Desabilitado',
  args: {
    label: 'Opção desabilitada',
    isChecked: false,
    isDisabled: true
  }
};

export const DisabledChecked: Story = {
  name: 'Desabilitado e selecionado',
  args: {
    label: 'Opção desabilitada',
    isChecked: true,
    isDisabled: true
  }
};

export const Group: Story = {
  name: 'Grupo',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px">
        <cb-radio name="voltage" value="110v" label="110V" [isChecked]="true"></cb-radio>
        <cb-radio name="voltage" value="220v" label="220V"></cb-radio>
        <cb-radio name="voltage" value="bivolt" label="Bivolt"></cb-radio>
      </div>
    `,
    imports: [RadioComponent]
  })
};
