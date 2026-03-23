import type { Meta, StoryObj } from '@storybook/angular';

import { SpinnerComponent } from '@cb/ds-components/spinner';

const meta: Meta<SpinnerComponent> = {
  title: 'UI/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Fornecem uma dica visual de que uma ação está sendo processada aguardando uma mudança ou um resultado.'
      }
    }
  },
  argTypes: {
    size: {
      description: 'Variações de tamanho do componente (variante responsiva)',
      control: { type: 'radio' },
      options: ['xsmall', 'small', 'medium', 'large'],
      table: { defaultValue: { summary: 'medium' }, type: { summary: "Variant<\"small\" | \"medium\" | \"large\" | \"xsmall\">" } }
    },
    thickness: {
      description: 'A espessura do spinner.',
      control: { type: 'radio' },
      options: ['xthin', 'thin', 'normal', 'thick', 'xthick'],
      table: { defaultValue: { summary: "'normal'" }, type: { summary: "Variant<\"thick\" | \"thin\" | \"normal\" | \"xthin\" | \"xthick\">" } }
    },
    speed: {
      description: 'A velocidade do spinner.',
      control: { type: 'radio' },
      options: ['xfast', 'fast', 'normal', 'slow', 'xslow'],
      table: { defaultValue: { summary: "'normal'" }, type: { summary: "Variant<\"normal\" | \"fast\" | \"slow\" | \"xfast\" | \"xslow\">" } }
    },
    label: {
      description: 'Para acessibilidade, é importante adicionar um texto de carregamento de fallback. Este texto ficará visível para os leitores de tela.',
      control: 'text',
      table: { defaultValue: { summary: "'Carregando'" }, type: { summary: 'string' } }
    },
    className: {
      description: 'Classe que o componente receberá.',
      control: 'text',
      table: { defaultValue: { summary: '-' }, type: { summary: 'string' } }
    }
  },
  args: {
    size: 'medium',
    thickness: 'normal',
    speed: 'normal',
    label: 'Carregando',
    className: ''
  }
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Default: Story = {
  name: 'Default',
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;justify-content:center;padding:32px">
        <cb-spinner
          [size]="size"
          [thickness]="thickness"
          [speed]="speed"
          [label]="label"
          [className]="className"
        ></cb-spinner>
      </div>
    `,
    imports: [SpinnerComponent]
  })
};

export const Tamanho: Story = {
  name: 'Tamanho',
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;padding:32px">
        <cb-spinner size="xsmall"></cb-spinner>
        <cb-spinner size="small"></cb-spinner>
        <cb-spinner size="medium"></cb-spinner>
        <cb-spinner size="large"></cb-spinner>
      </div>
    `,
    imports: [SpinnerComponent]
  })
};

export const Velocidade: Story = {
  name: 'Velocidade',
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;padding:32px">
        <cb-spinner speed="xfast"></cb-spinner>
        <cb-spinner speed="fast"></cb-spinner>
        <cb-spinner speed="normal"></cb-spinner>
        <cb-spinner speed="slow"></cb-spinner>
        <cb-spinner speed="xslow"></cb-spinner>
      </div>
    `,
    imports: [SpinnerComponent]
  })
};

export const Espessura: Story = {
  name: 'Espessura',
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;justify-content:center;gap:24px;padding:32px">
        <cb-spinner thickness="xthin"></cb-spinner>
        <cb-spinner thickness="thin"></cb-spinner>
        <cb-spinner thickness="normal"></cb-spinner>
        <cb-spinner thickness="thick"></cb-spinner>
        <cb-spinner thickness="xthick"></cb-spinner>
      </div>
    `,
    imports: [SpinnerComponent]
  })
};
