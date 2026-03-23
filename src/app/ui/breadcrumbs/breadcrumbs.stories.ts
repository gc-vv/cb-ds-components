import type { Meta, StoryObj } from '@storybook/angular';

import { BreadcrumbsComponent, type BreadcrumbItem } from '@cb/ds-components/breadcrumbs';

const defaultItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Primeiro', href: '/primeiro' },
  { label: 'Segundo', href: '/segundo' },
  { label: 'Terceiro' }
];

const meta: Meta<BreadcrumbsComponent> = {
  title: 'UI/Breadcrumbs',
  component: BreadcrumbsComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with label and optional href'
    },
    separator: {
      control: 'text',
      description: 'Separator character between items'
    },
    useHomeIcon: {
      control: 'boolean',
      description: 'Use home icon instead of text for first item'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    items: defaultItems,
    separator: '>',
    useHomeIcon: false,
    className: ''
  },
  render: (args) => ({
    props: args,
    template: `<cb-breadcrumbs 
      [items]="items" 
      [separator]="separator" 
      [useHomeIcon]="useHomeIcon" 
      [className]="className" 
    />`
  })
};

export default meta;

type Story = StoryObj<BreadcrumbsComponent>;

export const Default: Story = {};

export const WithHomeIcon: Story = {
  args: {
    useHomeIcon: true
  }
};

export const CustomSeparator: Story = {
  args: {
    separator: 'teste'
  }
};

export const ShortPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Produtos' }
    ]
  }
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Eletrônicos', href: '/eletronicos' },
      { label: 'Smartphones', href: '/eletronicos/smartphones' },
      { label: 'Android', href: '/eletronicos/smartphones/android' },
      { label: 'Samsung Galaxy S24' }
    ],
    useHomeIcon: true
  }
};

export const WithoutLinks: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Primeiro' },
      { label: 'Segundo' },
      { label: 'Terceiro' }
    ]
  }
};
