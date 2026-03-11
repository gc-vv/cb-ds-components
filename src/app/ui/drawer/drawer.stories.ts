import type { Meta, StoryObj } from '@storybook/angular';
import { signal } from '@angular/core';

import { DrawerComponent } from '@cb/ds-components/drawer';

const meta: Meta<DrawerComponent> = {
  title: 'UI/Drawer',
  component: DrawerComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed in the drawer header'
    },
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Position of the drawer'
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'full'],
      description: 'Size of the drawer'
    },
    open: {
      control: 'boolean',
      description: 'Whether the drawer is open'
    },
    hasContentPadding: {
      control: 'boolean',
      description: 'Whether the content area has padding'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    title: 'Título do Drawer',
    placement: 'right',
    size: 'medium',
    open: false,
    hasContentPadding: true,
    className: ''
  }
};

export default meta;

type Story = StoryObj<DrawerComponent>;

export const Default: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            [className]="className"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </cb-drawer>
        </div>
      `
    };
  }
};

export const LeftPlacement: Story = {
  args: {
    placement: 'left'
  },
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer (Left)
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </cb-drawer>
        </div>
      `
    };
  }
};

export const TopPlacement: Story = {
  args: {
    placement: 'top'
  },
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer (Top)
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </cb-drawer>
        </div>
      `
    };
  }
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom'
  },
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer (Bottom)
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </cb-drawer>
        </div>
      `
    };
  }
};

export const SmallSize: Story = {
  args: {
    size: 'small'
  },
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer (Small)
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </cb-drawer>
        </div>
      `
    };
  }
};

export const LargeSize: Story = {
  args: {
    size: 'large'
  },
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer (Large)
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </cb-drawer>
        </div>
      `
    };
  }
};

export const WithFooter: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer com Footer
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            
            <div drawerFooter style="display: flex; gap: 12px; justify-content: flex-end;">
              <button 
                (click)="isOpen.set(false)" 
                style="padding: 10px 20px; background: transparent; color: #666; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; font-size: 14px;"
              >
                Cancelar
              </button>
              <button 
                style="padding: 10px 20px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
              >
                Confirmar
              </button>
            </div>
          </cb-drawer>
        </div>
      `
    };
  }
};

export const LongContent: Story = {
  render: (args) => {
    const isOpen = signal(false);
    
    return {
      props: {
        ...args,
        isOpen,
        toggleDrawer: () => isOpen.set(!isOpen())
      },
      template: `
        <div>
          <button 
            (click)="toggleDrawer()" 
            style="padding: 12px 24px; background: #0033C6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;"
          >
            Abrir Drawer (Conteúdo Longo)
          </button>
          
          <cb-drawer
            [title]="title"
            [placement]="placement"
            [size]="size"
            [open]="isOpen()"
            [hasContentPadding]="hasContentPadding"
            (onOpenChange)="isOpen.set($event.open)"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </cb-drawer>
        </div>
      `
    };
  }
};
