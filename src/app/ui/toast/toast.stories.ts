import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { Component, inject } from '@angular/core';

import {
  ToastContainerComponent,
  ToastItemComponent,
  ToastService,
  type ToastData
} from '@cb/ds-components/toast';

// ---------------------------------------------------------------------------
// Static preview: single ToastItem without service
// ---------------------------------------------------------------------------

const meta: Meta<ToastItemComponent> = {
  title: 'UI/Toast',
  component: ToastItemComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Notificações temporárias que fornecem feedback ao usuário sobre uma ação realizada. Use `ToastService` para exibir toasts programaticamente e adicione `<cb-toast-container>` ao template raiz da aplicação.'
      }
    }
  },
  decorators: [
    moduleMetadata({ imports: [ToastItemComponent] })
  ],
  argTypes: {
    toast: { control: 'object' }
  },
  render: (args) => ({
    props: args,
    template: `<div style="padding:24px"><cb-toast-item [toast]="toast"></cb-toast-item></div>`,
    imports: [ToastItemComponent]
  })
};

export default meta;
type Story = StoryObj<ToastItemComponent>;

export const Sucesso: Story = {
  name: 'Sucesso',
  args: {
    toast: { id: '1', variant: 'success', title: 'Operação realizada!', message: 'Seu pedido foi confirmado com sucesso.', dismissible: true } as ToastData
  }
};

export const Erro: Story = {
  name: 'Erro',
  args: {
    toast: { id: '2', variant: 'error', title: 'Ocorreu um erro', message: 'Não foi possível processar sua solicitação. Tente novamente.', dismissible: true } as ToastData
  }
};

export const Aviso: Story = {
  name: 'Aviso',
  args: {
    toast: { id: '3', variant: 'warning', title: 'Atenção', message: 'Esta ação não pode ser desfeita.', dismissible: true } as ToastData
  }
};

export const Informacao: Story = {
  name: 'Informação',
  args: {
    toast: { id: '4', variant: 'info', title: 'Novidade disponível', message: 'Uma nova versão do aplicativo está disponível.', dismissible: true } as ToastData
  }
};

export const SemMensagem: Story = {
  name: 'Sem mensagem',
  args: {
    toast: { id: '5', variant: 'success', title: 'Salvo com sucesso!', dismissible: true } as ToastData
  }
};

export const SemFechar: Story = {
  name: 'Sem botão fechar',
  args: {
    toast: { id: '6', variant: 'info', title: 'Carregando dados...', message: 'Por favor aguarde.', dismissible: false } as ToastData
  }
};

export const Todos: Story = {
  name: 'Todas as variantes',
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;padding:24px;max-width:420px">
        <cb-toast-item [toast]="success"></cb-toast-item>
        <cb-toast-item [toast]="error"></cb-toast-item>
        <cb-toast-item [toast]="warning"></cb-toast-item>
        <cb-toast-item [toast]="info"></cb-toast-item>
      </div>
    `,
    props: {
      success: { id: '1', variant: 'success', title: 'Sucesso',    message: 'Operação realizada com êxito.',         dismissible: true },
      error:   { id: '2', variant: 'error',   title: 'Erro',       message: 'Não foi possível processar.',           dismissible: true },
      warning: { id: '3', variant: 'warning', title: 'Aviso',      message: 'Esta ação não pode ser desfeita.',      dismissible: true },
      info:    { id: '4', variant: 'info',    title: 'Informação', message: 'Uma nova versão está disponível.',      dismissible: true },
    },
    imports: [ToastItemComponent]
  })
};
