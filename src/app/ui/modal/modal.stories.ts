import type { Meta, StoryObj } from '@storybook/angular';
import { Component, signal } from '@angular/core';

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

@Component({
  selector: 'story-controlled-modal',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <cb-button (click)="openModal()">Abrir modal</cb-button>
    
    <cb-modal
      [isOpen]="isOpen()"
      [size]="size"
      [title]="title"
      [description]="description"
      (onOpenChange)="handleOpenChange($event)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <div footer>
        <cb-button (click)="handleOpenChange(false)">Aceitar</cb-button>
      </div>
    </cb-modal>
  `
})
class ControlledModalStory {
  isOpen = signal(false);
  size = 'medium';
  title = 'Título';
  description = 'Descrição';

  openModal() {
    this.isOpen.set(true);
  }

  handleOpenChange(open: boolean) {
    this.isOpen.set(open);
  }
}

export const Controlled: Story = {
  render: (args) => ({
    props: args,
    component: ControlledModalStory
  })
};

@Component({
  selector: 'story-small-modal',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <cb-button (click)="openModal()">Abrir modal pequeno</cb-button>
    
    <cb-modal
      [isOpen]="isOpen()"
      size="small"
      title="Título"
      description="Descrição"
      (onOpenChange)="handleOpenChange($event)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <div footer>
        <cb-button (click)="handleOpenChange(false)">Aceitar</cb-button>
      </div>
    </cb-modal>
  `
})
class SmallModalStory {
  isOpen = signal(false);

  openModal() {
    this.isOpen.set(true);
  }

  handleOpenChange(open: boolean) {
    this.isOpen.set(open);
  }
}

export const SmallSize: Story = {
  render: () => ({
    component: SmallModalStory
  })
};

@Component({
  selector: 'story-medium-modal',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <cb-button (click)="openModal()">Abrir modal médio</cb-button>
    
    <cb-modal
      [isOpen]="isOpen()"
      size="medium"
      title="Título"
      description="Descrição"
      (onOpenChange)="handleOpenChange($event)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      <div footer>
        <cb-button (click)="handleOpenChange(false)">Aceitar</cb-button>
      </div>
    </cb-modal>
  `
})
class MediumModalStory {
  isOpen = signal(false);

  openModal() {
    this.isOpen.set(true);
  }

  handleOpenChange(open: boolean) {
    this.isOpen.set(open);
  }
}

export const MediumSize: Story = {
  render: () => ({
    component: MediumModalStory
  })
};

@Component({
  selector: 'story-large-modal',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <cb-button (click)="openModal()">Abrir modal grande</cb-button>
    
    <cb-modal
      [isOpen]="isOpen()"
      size="large"
      title="Título"
      description="Descrição"
      (onOpenChange)="handleOpenChange($event)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      
      <div footer>
        <cb-button (click)="handleOpenChange(false)">Aceitar</cb-button>
      </div>
    </cb-modal>
  `
})
class LargeModalStory {
  isOpen = signal(false);

  openModal() {
    this.isOpen.set(true);
  }

  handleOpenChange(open: boolean) {
    this.isOpen.set(open);
  }
}

export const LargeSize: Story = {
  render: () => ({
    component: LargeModalStory
  })
};

@Component({
  selector: 'story-full-modal',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <cb-button (click)="openModal()">Abrir modal em tela cheia</cb-button>
    
    <cb-modal
      [isOpen]="isOpen()"
      size="full"
      title="Título"
      description="Descrição"
      (onOpenChange)="handleOpenChange($event)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      
      <div footer>
        <cb-button (click)="handleOpenChange(false)">Aceitar</cb-button>
      </div>
    </cb-modal>
  `
})
class FullModalStory {
  isOpen = signal(false);

  openModal() {
    this.isOpen.set(true);
  }

  handleOpenChange(open: boolean) {
    this.isOpen.set(open);
  }
}

export const FullSize: Story = {
  render: () => ({
    component: FullModalStory
  })
};

@Component({
  selector: 'story-scroll-modal',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <cb-button (click)="openModal()">Abrir modal</cb-button>
    
    <cb-modal
      [isOpen]="isOpen()"
      size="medium"
      title="Título"
      description="Descrição"
      (onOpenChange)="handleOpenChange($event)"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      
      <div footer>
        <cb-button (click)="handleOpenChange(false)">Aceitar</cb-button>
      </div>
    </cb-modal>
  `
})
class ScrollModalStory {
  isOpen = signal(false);

  openModal() {
    this.isOpen.set(true);
  }

  handleOpenChange(open: boolean) {
    this.isOpen.set(open);
  }
}

export const WithScroll: Story = {
  render: () => ({
    component: ScrollModalStory
  })
};
