import type { Meta, StoryObj } from '@storybook/angular';

import { AccordionComponent, type AccordionItem } from '@cb/ds-components/accordion';

const items: AccordionItem[] = [
  {
    title: 'Este é o título do accordion 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    title: 'Este é o título do accordion 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    title: 'Este é o título do accordion 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }
];

const meta: Meta<AccordionComponent> = {
  title: 'UI/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object'
    },
    isMultiple: {
      control: 'boolean'
    },
    className: {
      control: 'text'
    },
    headingLevel: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6']
    }
  },
  args: {
    items,
    isMultiple: true,
    className: '',
    headingLevel: 'h2'
  },
  render: (args) => ({
    props: args,
    template:
      '<app-accordion [items]="items" [isMultiple]="isMultiple" [className]="className" [headingLevel]="headingLevel" />',
    imports: [AccordionComponent]
  })
};

export default meta;

type Story = StoryObj<AccordionComponent>;

export const Default: Story = {};

export const ExpandirUnico: Story = {
  args: {
    isMultiple: false
  }
};

export const HeadingH3: Story = {
  args: {
    headingLevel: 'h3'
  }
};
