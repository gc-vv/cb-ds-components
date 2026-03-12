import type { Meta, StoryObj } from '@storybook/angular';

import { TabsComponent, type Tab } from '@cb/ds-components/tabs';

const TABS: Tab[] = [
  { id: 'tab-1', label: 'Resumo' },
  { id: 'tab-2', label: 'Especificações' },
  { id: 'tab-3', label: 'Avaliações' }
];

const TABS_DISABLED: Tab[] = [
  { id: 'tab-1', label: 'Resumo' },
  { id: 'tab-2', label: 'Especificações' },
  { id: 'tab-3', label: 'Avaliações', disabled: true }
];

const meta: Meta<TabsComponent> = {
  title: 'UI/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de abas para organizar conteúdo em seções navegáveis.'
      }
    }
  },
  argTypes: {
    tabs: { control: 'object' },
    activeId: { control: 'text' },
    variant: {
      control: { type: 'radio' },
      options: ['underline', 'pill'],
      table: { defaultValue: { summary: 'underline' } }
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: { defaultValue: { summary: 'medium' } }
    },
    className: { control: 'text' }
  },
  args: {
    tabs: TABS,
    activeId: 'tab-1',
    variant: 'underline',
    size: 'medium',
    className: ''
  },
  render: (args) => ({
    props: args,
    template: `<cb-tabs [tabs]="tabs" [activeId]="activeId" [variant]="variant" [size]="size" [className]="className"></cb-tabs>`,
    imports: [TabsComponent]
  })
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  name: 'Default'
};

export const Pill: Story = {
  name: 'Variante pill',
  args: { variant: 'pill' }
};

export const Tamanhos: Story = {
  name: 'Tamanhos',
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:16px">
        <cb-tabs [tabs]="tabs" activeId="tab-1" size="small"></cb-tabs>
        <cb-tabs [tabs]="tabs" activeId="tab-1" size="medium"></cb-tabs>
        <cb-tabs [tabs]="tabs" activeId="tab-1" size="large"></cb-tabs>
      </div>
    `,
    props: { tabs: TABS },
    imports: [TabsComponent]
  })
};

export const TamanhosPill: Story = {
  name: 'Tamanhos pill',
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:16px">
        <cb-tabs [tabs]="tabs" activeId="tab-1" variant="pill" size="small"></cb-tabs>
        <cb-tabs [tabs]="tabs" activeId="tab-1" variant="pill" size="medium"></cb-tabs>
        <cb-tabs [tabs]="tabs" activeId="tab-1" variant="pill" size="large"></cb-tabs>
      </div>
    `,
    props: { tabs: TABS },
    imports: [TabsComponent]
  })
};

export const ComAbaDesabilitada: Story = {
  name: 'Aba desabilitada',
  args: { tabs: TABS_DISABLED }
};
