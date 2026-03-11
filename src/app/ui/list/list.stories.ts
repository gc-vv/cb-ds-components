import type { Meta, StoryObj } from '@storybook/angular';

import { ListComponent } from '@cb/ds-components/list';
import type { ListItem } from '@cb/ds-components/list';

const meta: Meta<ListComponent> = {
  title: 'UI/List',
  component: ListComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array de itens da lista'
    },
    selectable: {
      control: 'boolean',
      description: 'Permitir seleção de itens'
    },
    showDividers: {
      control: 'boolean',
      description: 'Mostrar divisores entre itens'
    },
    dense: {
      control: 'boolean',
      description: 'Modo compacto'
    },
    itemClick: {
      action: 'itemClick',
      description: 'Evento ao clicar em item'
    },
    itemSelect: {
      action: 'itemSelect',
      description: 'Evento ao selecionar item'
    }
  },
  args: {
    selectable: false,
    showDividers: false,
    dense: false
  }
};

export default meta;

type Story = StoryObj<ListComponent>;

const mockItems: ListItem[] = [
  {
    id: 1,
    primary: 'Inbox',
    secondary: '24 mensagens não lidas'
  },
  {
    id: 2,
    primary: 'Starred',
    secondary: '5 itens favoritos'
  },
  {
    id: 3,
    primary: 'Sent Mail',
    secondary: '128 mensagens enviadas'
  },
  {
    id: 4,
    primary: 'Drafts',
    secondary: '3 rascunhos'
  }
];

const mockItemsWithAvatars: ListItem[] = [
  {
    id: 1,
    primary: 'João Silva',
    secondary: 'Engenheiro de Software',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    primary: 'Maria Santos',
    secondary: 'Designer UX/UI',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    primary: 'Pedro Costa',
    secondary: 'Gerente de Produto',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    primary: 'Ana Oliveira',
    secondary: 'Desenvolvedora Front-end',
    avatar: 'https://i.pravatar.cc/150?img=4'
  }
];

const mockItemsWithIcons: ListItem[] = [
  {
    id: 1,
    primary: 'Configurações',
    secondary: 'Gerenciar suas preferências',
    icon: '⚙️'
  },
  {
    id: 2,
    primary: 'Notificações',
    secondary: 'Configurar alertas',
    icon: '🔔'
  },
  {
    id: 3,
    primary: 'Privacidade',
    secondary: 'Controle seus dados',
    icon: '🔒'
  },
  {
    id: 4,
    primary: 'Ajuda',
    secondary: 'Central de suporte',
    icon: '❓'
  }
];

export const Default: Story = {
  args: {
    items: mockItems
  }
};

export const WithDividers: Story = {
  args: {
    items: mockItems,
    showDividers: true
  }
};

export const Dense: Story = {
  args: {
    items: mockItems,
    dense: true,
    showDividers: true
  }
};

export const Selectable: Story = {
  args: {
    items: mockItems.map((item, index) => ({
      ...item,
      selected: index === 0
    })),
    selectable: true,
    showDividers: true
  }
};

export const WithAvatars: Story = {
  args: {
    items: mockItemsWithAvatars,
    selectable: true
  }
};

export const WithAvatarsDense: Story = {
  args: {
    items: mockItemsWithAvatars,
    dense: true,
    showDividers: true
  }
};

export const WithIcons: Story = {
  args: {
    items: mockItemsWithIcons,
    selectable: true,
    showDividers: true
  }
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      {
        id: 1,
        primary: 'Item ativo',
        secondary: 'Este item está habilitado'
      },
      {
        id: 2,
        primary: 'Item desabilitado',
        secondary: 'Este item está desabilitado',
        disabled: true
      },
      {
        id: 3,
        primary: 'Outro item ativo',
        secondary: 'Este item está habilitado'
      },
      {
        id: 4,
        primary: 'Outro item desabilitado',
        secondary: 'Este item está desabilitado',
        disabled: true
      }
    ],
    selectable: true,
    showDividers: true
  }
};

export const MixedContent: Story = {
  args: {
    items: [
      {
        id: 1,
        primary: 'João Silva',
        secondary: 'Engenheiro de Software',
        avatar: 'https://i.pravatar.cc/150?img=5',
        selected: true
      },
      {
        id: 2,
        primary: 'Configurações',
        secondary: 'Gerenciar preferências',
        icon: '⚙️'
      },
      {
        id: 3,
        primary: 'Somente título',
      },
      {
        id: 4,
        primary: 'Item com avatar',
        secondary: 'Descrição do item',
        avatar: 'https://i.pravatar.cc/150?img=6',
        disabled: true
      }
    ],
    selectable: true,
    showDividers: true
  }
};

export const LongList: Story = {
  args: {
    items: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      primary: `Item ${i + 1}`,
      secondary: `Descrição do item ${i + 1}`,
      icon: ['📧', '📁', '⭐', '📤', '📝'][i % 5],
      selected: i === 2
    })),
    selectable: true,
    showDividers: true
  }
};

export const SingleLineItems: Story = {
  args: {
    items: [
      {
        id: 1,
        primary: 'Home',
        icon: '🏠'
      },
      {
        id: 2,
        primary: 'Perfil',
        icon: '👤'
      },
      {
        id: 3,
        primary: 'Mensagens',
        icon: '💬'
      },
      {
        id: 4,
        primary: 'Sair',
        icon: '🚪'
      }
    ],
    selectable: true,
    dense: true
  }
};
