import type { Meta, StoryObj } from '@storybook/angular';

import { TabsComponent, type Tab } from '@cb/ds-components/tabs';

const tabs: Tab[] = [
  { id: 'tab-1', label: 'Resumo' },
  { id: 'tab-2', label: 'Especificações' },
  { id: 'tab-3', label: 'Avaliações' }
];

const tabsWithDisabled: Tab[] = [
  { id: 'tab-1', label: 'Resumo' },
  { id: 'tab-2', label: 'Especificações' },
  { id: 'tab-3', label: 'Avaliações', disabled: true }
];

const meta: Meta<TabsComponent> = {
  title: 'UI/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    activeId: { control: 'text' },
    tabChange: { action: 'tabChange' }
  },
  args: {
    tabs,
    activeId: 'tab-1'
  },
  render: (args) => ({
    props: args,
    template:
      '<app-tabs [tabs]="tabs" [activeId]="activeId" (tabChange)="tabChange($event)" />',
    imports: [TabsComponent]
  })
};

export default meta;

type Story = StoryObj<TabsComponent>;

export const Default: Story = {};

export const ComAbaSelecionada: Story = {
  args: {
    activeId: 'tab-2'
  }
};

export const ComAbaDesabilitada: Story = {
  args: {
    tabs: tabsWithDisabled
  }
};
