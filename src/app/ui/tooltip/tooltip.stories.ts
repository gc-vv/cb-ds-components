import type { Meta, StoryObj } from '@storybook/angular';

import { TooltipComponent } from '@cb/ds-components/tooltip';

const meta: Meta<TooltipComponent & { label: string }> = {
  title: 'UI/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text'
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left']
    },
    label: {
      control: 'text'
    }
  },
  args: {
    text: 'Texto do tooltip',
    position: 'top',
    label: 'Passe o mouse aqui'
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex; justify-content:center; align-items:center; padding:80px;">
        <app-tooltip [text]="text" [position]="position">
          <button style="
            padding: 10px 20px;
            border-radius: 8px;
            background: #0046C0;
            color: #fff;
            border: none;
            font: inherit;
            cursor: pointer;
          ">{{ label }}</button>
        </app-tooltip>
      </div>
    `,
    imports: [TooltipComponent]
  })
};

export default meta;

type Story = StoryObj<TooltipComponent & { label: string }>;

export const Top: Story = {
  args: { position: 'top' }
};

export const Bottom: Story = {
  args: { position: 'bottom' }
};

export const Right: Story = {
  args: { position: 'right' }
};

export const Left: Story = {
  args: { position: 'left' }
};
