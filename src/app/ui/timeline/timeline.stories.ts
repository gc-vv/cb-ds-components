import type { Meta, StoryObj } from '@storybook/angular';

import { TimelineComponent, type TimelineStep } from '@cb/ds-components/timeline';

const STEPS_TRACKING: TimelineStep[] = [
  { id: '1', label: 'Pedido realizado',      description: 'Seu pedido foi recebido.',                   date: '10/03 09:00', status: 'completed' },
  { id: '2', label: 'Pagamento confirmado',  description: 'O pagamento foi aprovado.',                  date: '10/03 09:45', status: 'completed' },
  { id: '3', label: 'Em separação',          description: 'Estamos preparando seu pedido.',             date: '11/03 08:00', status: 'active'    },
  { id: '4', label: 'Em transporte',         description: 'Seu pedido está a caminho.',                 date: '',            status: 'pending'   },
  { id: '5', label: 'Entregue',              description: 'Pedido entregue no endereço cadastrado.',    date: '',            status: 'pending'   },
];

const STEPS_SIMPLE: TimelineStep[] = [
  { id: '1', label: 'Etapa 1', status: 'completed' },
  { id: '2', label: 'Etapa 2', status: 'completed' },
  { id: '3', label: 'Etapa 3', status: 'active'    },
  { id: '4', label: 'Etapa 4', status: 'pending'   },
];

const STEPS_ALL_DONE: TimelineStep[] = [
  { id: '1', label: 'Pedido realizado',     date: '10/03', status: 'completed' },
  { id: '2', label: 'Pagamento confirmado', date: '10/03', status: 'completed' },
  { id: '3', label: 'Em transporte',        date: '11/03', status: 'completed' },
  { id: '4', label: 'Entregue',             date: '12/03', status: 'completed' },
];

const meta: Meta<TimelineComponent> = {
  title: 'UI/Timeline',
  component: TimelineComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Exibe uma sequência de eventos ou etapas em ordem cronológica, indicando o progresso de um processo.'
      }
    }
  },
  argTypes: {
    steps: { control: 'object' },
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      table: { defaultValue: { summary: 'vertical' } }
    },
    className: { control: 'text' }
  },
  args: {
    steps: STEPS_TRACKING,
    orientation: 'vertical',
    className: ''
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width:380px;padding:24px">
        <cb-timeline [steps]="steps" [orientation]="orientation" [className]="className"></cb-timeline>
      </div>
    `,
    imports: [TimelineComponent]
  })
};

export default meta;
type Story = StoryObj<TimelineComponent>;

export const Default: Story = {
  name: 'Rastreamento de pedido'
};

export const Simples: Story = {
  name: 'Simples (sem datas)',
  args: { steps: STEPS_SIMPLE }
};

export const TodosConcluidos: Story = {
  name: 'Todos concluídos',
  args: { steps: STEPS_ALL_DONE }
};

export const Horizontal: Story = {
  name: 'Horizontal',
  render: () => ({
    props: { steps: STEPS_SIMPLE },
    template: `
      <div style="padding:32px">
        <cb-timeline [steps]="steps" orientation="horizontal"></cb-timeline>
      </div>
    `,
    imports: [TimelineComponent]
  })
};
