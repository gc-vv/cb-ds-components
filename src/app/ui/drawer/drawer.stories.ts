import type { Meta, StoryObj } from '@storybook/angular';
import { signal } from '@angular/core';

import { DrawerComponent } from '@cb/ds-components/drawer';
import { ButtonComponent } from '@cb/ds-components/button';

const meta: Meta<DrawerComponent> = {
  title: 'UI/Drawer',
  component: DrawerComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do Drawer.'
    },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Define a posição do Drawer.'
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'full'],
      description: 'Define o tamanho do Drawer.'
    },
    open: {
      control: 'boolean',
      description: 'Define se o Drawer está aberto ou fechado.'
    },
    hasContentPadding: {
      control: 'boolean',
      description: 'Define se o conteúdo do Drawer terá padding.'
    },
    overlay: {
      control: 'boolean',
      description: 'Exibe o backdrop semitransparente atrás do Drawer.'
    },
    className: {
      control: 'text',
      description: 'Classe CSS extra aplicada ao elemento raiz.'
    }
  },
  args: {
    title: 'Título do Drawer',
    placement: 'left',
    size: 'medium',
    open: false,
    hasContentPadding: true,
    overlay: true,
    className: ''
  }
};

export default meta;

type Story = StoryObj<DrawerComponent>;

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Default: Story = {
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer</cb-button>

        <cb-drawer
          [title]="title"
          [placement]="placement"
          [size]="size"
          [open]="isOpen()"
          [overlay]="overlay"
          [hasContentPadding]="hasContentPadding"
          [className]="className"
          (onOpenChange)="isOpen.set($event.open)"
        >
          <p>${LOREM}</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const LeftPlacement: Story = {
  name: 'Posição: Left',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer (Left)</cb-button>
        <cb-drawer [title]="title" placement="left" [size]="size" [open]="isOpen()" [overlay]="overlay" [hasContentPadding]="hasContentPadding" (onOpenChange)="isOpen.set($event.open)">
          <p>${LOREM}</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const RightPlacement: Story = {
  name: 'Posição: Right',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer (Right)</cb-button>
        <cb-drawer [title]="title" placement="right" [size]="size" [open]="isOpen()" [overlay]="overlay" [hasContentPadding]="hasContentPadding" (onOpenChange)="isOpen.set($event.open)">
          <p>${LOREM}</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const TopPlacement: Story = {
  name: 'Posição: Top',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer (Top)</cb-button>
        <cb-drawer [title]="title" placement="top" [size]="size" [open]="isOpen()" [overlay]="overlay" [hasContentPadding]="hasContentPadding" (onOpenChange)="isOpen.set($event.open)">
          <p>${LOREM}</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const BottomPlacement: Story = {
  name: 'Posição: Bottom',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer (Bottom)</cb-button>
        <cb-drawer [title]="title" placement="bottom" [size]="size" [open]="isOpen()" [overlay]="overlay" [hasContentPadding]="hasContentPadding" (onOpenChange)="isOpen.set($event.open)">
          <p>${LOREM}</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const SmallSize: Story = {
  name: 'Tamanho: Small',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer (Small)</cb-button>
        <cb-drawer [title]="title" [placement]="placement" size="small" [open]="isOpen()" [overlay]="overlay" [hasContentPadding]="hasContentPadding" (onOpenChange)="isOpen.set($event.open)">
          <p>${LOREM}</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const LargeSize: Story = {
  name: 'Tamanho: Large',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer (Large)</cb-button>
        <cb-drawer [title]="title" [placement]="placement" size="large" [open]="isOpen()" [overlay]="overlay" [hasContentPadding]="hasContentPadding" (onOpenChange)="isOpen.set($event.open)">
          <p>${LOREM}</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const WithFooter: Story = {
  name: 'Com Footer',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer com Footer</cb-button>
        <cb-drawer
          [title]="title"
          [placement]="placement"
          [size]="size"
          [open]="isOpen()"
          [overlay]="overlay"
          [hasContentPadding]="hasContentPadding"
          (onOpenChange)="isOpen.set($event.open)"
        >
          <p>${LOREM}</p>
          <div drawerFooter style="display:flex;gap:12px;justify-content:flex-end">
            <cb-button variant="secondary" (click)="isOpen.set(false)">Cancelar</cb-button>
            <cb-button variant="primary">Confirmar</cb-button>
          </div>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};

export const LongContent: Story = {
  name: 'Conteúdo Longo',
  render: (args) => {
    const isOpen = signal(false);
    return {
      props: { ...args, isOpen, openDrawer: () => isOpen.set(true) },
      template: `
        <cb-button variant="primary" (click)="openDrawer()">Abrir Drawer (Conteúdo Longo)</cb-button>
        <cb-drawer
          [title]="title"
          [placement]="placement"
          [size]="size"
          [open]="isOpen()"
          [overlay]="overlay"
          [hasContentPadding]="hasContentPadding"
          (onOpenChange)="isOpen.set($event.open)"
        >
          <p>${LOREM}</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </cb-drawer>
      `,
      imports: [DrawerComponent, ButtonComponent]
    };
  }
};
