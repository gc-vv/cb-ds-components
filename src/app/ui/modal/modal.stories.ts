import type { Meta, StoryObj } from '@storybook/angular';
import { signal } from '@angular/core';

import { ModalComponent } from '@cb/ds-components/modal';
import { ButtonComponent } from '@cb/ds-components/button';

const meta: Meta<ModalComponent> = {
  title: 'UI/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Define se o modal está aberto ou fechado'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Define o tamanho do modal'
    },
    title: {
      control: 'text',
      description: 'Título do modal'
    },
    description: {
      control: 'text',
      description: 'Descrição do modal'
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Evento emitido quando o modal abre ou fecha'
    }
  },
  args: {
    isOpen: false,
    size: 'medium',
    title: 'Título',
    description: 'Descrição'
  }
};

export default meta;

type Story = StoryObj<ModalComponent>;

export const Controlled: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        openModal: () => isOpen.set(true)
      },
      template: `
        <cb-button (click)="openModal()">Abrir modal</cb-button>
        
        <cb-modal
          [isOpen]="isOpen()"
          [size]="size"
          [title]="title"
          [description]="description"
          (onOpenChange)="isOpen.set($event)"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          
          <div footer>
            <cb-button (click)="isOpen.set(false)">Aceitar</cb-button>
          </div>
        </cb-modal>
      `,
      imports: [ModalComponent, ButtonComponent]
    };
  }
};

export const SmallSize: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        openModal: () => isOpen.set(true)
      },
      template: `
        <cb-button (click)="openModal()">Abrir modal pequeno</cb-button>
        
        <cb-modal
          [isOpen]="isOpen()"
          size="small"
          title="Título"
          description="Descrição"
          (onOpenChange)="isOpen.set($event)"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          <div footer>
            <cb-button (click)="isOpen.set(false)">Aceitar</cb-button>
          </div>
        </cb-modal>
      `,
      imports: [ModalComponent, ButtonComponent]
    };
  }
};

export const MediumSize: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        openModal: () => isOpen.set(true)
      },
      template: `
        <cb-button (click)="openModal()">Abrir modal médio</cb-button>
        
        <cb-modal
          [isOpen]="isOpen()"
          size="medium"
          title="Título"
          description="Descrição"
          (onOpenChange)="isOpen.set($event)"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
          <div footer>
            <cb-button (click)="isOpen.set(false)">Aceitar</cb-button>
          </div>
        </cb-modal>
      `,
      imports: [ModalComponent, ButtonComponent]
    };
  }
};

export const LargeSize: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        openModal: () => isOpen.set(true)
      },
      template: `
        <cb-button (click)="openModal()">Abrir modal grande</cb-button>
        
        <cb-modal
          [isOpen]="isOpen()"
          size="large"
          title="Título"
          description="Descrição"
          (onOpenChange)="isOpen.set($event)"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          
          <div footer>
            <cb-button (click)="isOpen.set(false)">Aceitar</cb-button>
          </div>
        </cb-modal>
      `,
      imports: [ModalComponent, ButtonComponent]
    };
  }
};

export const FullSize: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        openModal: () => isOpen.set(true)
      },
      template: `
        <cb-button (click)="openModal()">Abrir modal em tela cheia</cb-button>
        
        <cb-modal
          [isOpen]="isOpen()"
          size="full"
          title="Título"
          description="Descrição"
          (onOpenChange)="isOpen.set($event)"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          
          <div footer>
            <cb-button (click)="isOpen.set(false)">Aceitar</cb-button>
          </div>
        </cb-modal>
      `,
      imports: [ModalComponent, ButtonComponent]
    };
  }
};

export const WithScroll: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        openModal: () => isOpen.set(true)
      },
      template: `
        <cb-button (click)="openModal()">Abrir modal</cb-button>
        
        <cb-modal
          [isOpen]="isOpen()"
          size="medium"
          title="Título"
          description="Descrição"
          (onOpenChange)="isOpen.set($event)"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          
          <div footer>
            <cb-button (click)="isOpen.set(false)">Aceitar</cb-button>
          </div>
        </cb-modal>
      `,
      imports: [ModalComponent, ButtonComponent]
    };
  }
};
