import type { Meta, StoryObj } from '@storybook/angular';

import { DividerComponent } from '@cb/ds-components/divider';

const meta: Meta<DividerComponent> = {
  title: 'UI/Divider',
  component: DividerComponent,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider'
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Visual style of the divider'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    className: ''
  }
};

export default meta;

type Story = StoryObj<DividerComponent>;

export const Horizontal: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div>
        <p>Content above divider</p>
        <cb-divider [orientation]="orientation" [variant]="variant" [className]="className" />
        <p>Content below divider</p>
      </div>
    `
  })
};

export const HorizontalDashed: Story = {
  args: {
    variant: 'dashed'
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <p>Content above divider</p>
        <cb-divider [orientation]="orientation" [variant]="variant" [className]="className" />
        <p>Content below divider</p>
      </div>
    `
  })
};

export const HorizontalDotted: Story = {
  args: {
    variant: 'dotted'
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <p>Content above divider</p>
        <cb-divider [orientation]="orientation" [variant]="variant" [className]="className" />
        <p>Content below divider</p>
      </div>
    `
  })
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical'
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>Left content</span>
        <cb-divider [orientation]="orientation" [variant]="variant" [className]="className" />
        <span>Right content</span>
      </div>
    `
  })
};

export const VerticalDashed: Story = {
  args: {
    orientation: 'vertical',
    variant: 'dashed'
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>Left content</span>
        <cb-divider [orientation]="orientation" [variant]="variant" [className]="className" />
        <span>Right content</span>
      </div>
    `
  })
};

export const VerticalDotted: Story = {
  args: {
    orientation: 'vertical',
    variant: 'dotted'
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>Left content</span>
        <cb-divider [orientation]="orientation" [variant]="variant" [className]="className" />
        <span>Right content</span>
      </div>
    `
  })
};

export const InList: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div>
        <h3>Menu Items</h3>
        <ul style="list-style: none; padding: 0;">
          <li style="padding: 8px 0;">Home</li>
          <cb-divider />
          <li style="padding: 8px 0;">Products</li>
          <cb-divider />
          <li style="padding: 8px 0;">About</li>
          <cb-divider />
          <li style="padding: 8px 0;">Contact</li>
        </ul>
      </div>
    `
  })
};
