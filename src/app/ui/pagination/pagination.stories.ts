import type { Meta, StoryObj } from '@storybook/angular';

import { PaginationComponent } from '@cb/ds-components/pagination';

const meta: Meta<PaginationComponent> = {
  title: 'UI/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: 'number',
      description: 'Total number of pages'
    },
    currentPage: {
      control: 'number',
      description: 'Current active page'
    },
    maxVisiblePages: {
      control: 'number',
      description: 'Maximum number of page buttons to show'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first and last page buttons'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    totalPages: 10,
    currentPage: 1,
    maxVisiblePages: 7,
    showFirstLast: true,
    className: ''
  },
  render: (args) => ({
    props: {
      ...args,
      onPageChange: (event: any) => {
        console.log('Page changed:', event);
      }
    },
    template: `
      <cb-pagination 
        [totalPages]="totalPages" 
        [currentPage]="currentPage"
        [maxVisiblePages]="maxVisiblePages"
        [showFirstLast]="showFirstLast"
        [className]="className"
        (pageChange)="onPageChange($event)"
      />
    `
  })
};

export default meta;

type Story = StoryObj<PaginationComponent>;

export const Default: Story = {};

export const FewPages: Story = {
  args: {
    totalPages: 5,
    currentPage: 3
  }
};

export const ManyPages: Story = {
  args: {
    totalPages: 50,
    currentPage: 25
  }
};

export const FirstPage: Story = {
  args: {
    totalPages: 20,
    currentPage: 1
  }
};

export const LastPage: Story = {
  args: {
    totalPages: 20,
    currentPage: 20
  }
};

export const MiddlePage: Story = {
  args: {
    totalPages: 20,
    currentPage: 10
  }
};

export const WithoutFirstLast: Story = {
  args: {
    totalPages: 15,
    currentPage: 8,
    showFirstLast: false
  }
};

export const CompactMode: Story = {
  args: {
    totalPages: 30,
    currentPage: 15,
    maxVisiblePages: 5
  }
};
