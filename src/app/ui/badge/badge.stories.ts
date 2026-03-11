import type { Meta, StoryObj } from '@storybook/angular';

import { BadgeComponent } from '@cb/ds-components/badge';

const meta: Meta<BadgeComponent> = {
  title: 'UI/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'discount', 'offer'],
      description: 'Visual variant of the badge'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    variant: 'primary',
    size: 'medium',
    className: ''
  },
  render: (args) => ({
    props: args,
    template: `<cb-badge [variant]="variant" [size]="size" [className]="className">Badge</cb-badge>`
  })
};

export default meta;

type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Discount: Story = {
  args: {
    variant: 'discount'
  }
};

export const Offer: Story = {
  args: {
    variant: 'offer'
  }
};

export const Small: Story = {
  args: {
    variant: 'discount',
    size: 'small'
  }
};

export const Medium: Story = {
  args: {
    variant: 'discount',
    size: 'medium'
  }
};

export const Large: Story = {
  args: {
    variant: 'discount',
    size: 'large'
  }
};

export const CustomText: Story = {
  args: {
    variant: 'primary',
    size: 'medium'
  },
  render: (args) => ({
    props: args,
    template: `<cb-badge [variant]="variant" [size]="size">15% OFF</cb-badge>`
  })
};
