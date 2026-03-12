import { Component, inject } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';

import {
  ToastContainerComponent,
  ToastItemComponent,
  ToastService,
  type ToastData,
  type ToastVariant
} from '@cb/ds-components/toast';

// ---------------------------------------------------------------------------
// Tipos intermediários para controles planos
// ---------------------------------------------------------------------------

interface ToastArgs {
  variant: ToastVariant;
  title: string;
  message: string;
  dismissible: boolean;
  duration: number;
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<ToastArgs> = {
  title: 'UI/Toast',
  component: ToastItemComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          'Notificações temporárias que fornecem feedback ao usuário sobre uma ação realizada.',
          '',
          '### Uso com serviço',
          '1. Adicione `<cb-toast-container>` ao template raiz da aplicação.',
          '2. Injete `ToastService` e chame os métodos de conveniência:',
          '',
          '```ts',
          "this.toast.success('Salvo!', 'Suas alterações foram salvas.');",
          "this.toast.error('Erro', 'Não foi possível processar.');",
          "this.toast.warning('Atenção', 'Ação irreversível.');",
          "this.toast.info('Novidade', 'Nova versão disponível.');",
          '```',
          '',
          '### `ToastData`',
          '| Campo | Tipo | Obrigatório | Padrão |',
          '|---|---|---|---|',
          '| `id` | `string` | ✓ | — |',
          '| `variant` | `success` \\| `error` \\| `warning` \\| `info` | ✓ | — |',
          '| `title` | `string` | ✓ | — |',
          '| `message` | `string` | — | — |',
          '| `duration` | `number` (ms) | — | `4000` |',
          '| `dismissible` | `boolean` | — | `true` |',
        ].join('\n')
      }
    }
  },
  argTypes: {
    variant: {
      description: 'Define a variante visual e semântica da notificação.',
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
      table: {
        type: { summary: 'ToastVariant' },
        defaultValue: { summary: 'success' }
      }
    },
    title: {
      description: 'Título principal exibido na notificação.',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    message: {
      description: 'Mensagem complementar exibida abaixo do título. Opcional.',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    dismissible: {
      description: 'Exibe o botão de fechar quando `true`.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } }
    },
    duration: {
      description: 'Tempo em milissegundos até a notificação ser removida automaticamente. Use `0` para desativar.',
      control: { type: 'number', min: 0, step: 500 },
      table: { type: { summary: 'number' }, defaultValue: { summary: '4000' } }
    }
  },
  args: {
    variant: 'success',
    title: 'Operação realizada!',
    message: 'Seu pedido foi confirmado com sucesso.',
    dismissible: true,
    duration: 4000
  },
  render: (args: ToastArgs) => {
    const toast: ToastData = { id: 'preview', ...args };
    return {
      props: { toast },
      template: `<div style="padding:24px;max-width:420px"><cb-toast-item [toast]="toast"></cb-toast-item></div>`,
      imports: [ToastItemComponent]
    };
  }
};

export default meta;
type Story = StoryObj<ToastArgs>;

// ---------------------------------------------------------------------------
// Default (playground com controles)
// ---------------------------------------------------------------------------

export const Default: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story: 'Use os controles abaixo para customizar a notificação e visualizar o resultado em tempo real.'
      }
    }
  }
};

// ---------------------------------------------------------------------------
// Variantes estáticas
// ---------------------------------------------------------------------------

export const Sucesso: Story = {
  name: 'Sucesso',
  parameters: { docs: { description: { story: 'Use `variant: "success"` para confirmar ações realizadas com êxito.' } } },
  args: { variant: 'success', title: 'Operação realizada!', message: 'Seu pedido foi confirmado com sucesso.' }
};

export const Erro: Story = {
  name: 'Erro',
  parameters: { docs: { description: { story: 'Use `variant: "error"` para erros críticos que precisam de atenção imediata.' } } },
  args: { variant: 'error', title: 'Ocorreu um erro', message: 'Não foi possível processar sua solicitação. Tente novamente.' }
};

export const Aviso: Story = {
  name: 'Aviso',
  parameters: { docs: { description: { story: 'Use `variant: "warning"` para alertar sobre ações potencialmente irreversíveis.' } } },
  args: { variant: 'warning', title: 'Atenção', message: 'Esta ação não pode ser desfeita.' }
};

export const Informacao: Story = {
  name: 'Informação',
  parameters: { docs: { description: { story: 'Use `variant: "info"` para comunicar informações neutras ao usuário.' } } },
  args: { variant: 'info', title: 'Novidade disponível', message: 'Uma nova versão do aplicativo está disponível.' }
};

export const SemMensagem: Story = {
  name: 'Sem mensagem',
  parameters: { docs: { description: { story: 'O campo `message` é opcional. Omita-o para notificações curtas.' } } },
  args: { variant: 'success', title: 'Salvo com sucesso!', message: '', dismissible: true }
};

export const SemFechar: Story = {
  name: 'Sem botão fechar',
  parameters: { docs: { description: { story: 'Defina `dismissible: false` para ocultar o botão de fechar.' } } },
  args: { variant: 'info', title: 'Carregando dados...', message: 'Por favor aguarde.', dismissible: false }
};

// ---------------------------------------------------------------------------
// Todas as variantes lado a lado
// ---------------------------------------------------------------------------

export const Todos: Story = {
  name: 'Todas as variantes',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Todas as variantes renderizadas ao mesmo tempo para comparação visual.' } }
  },
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
      success: { id: '1', variant: 'success', title: 'Sucesso',    message: 'Operação realizada com êxito.',    dismissible: true },
      error:   { id: '2', variant: 'error',   title: 'Erro',       message: 'Não foi possível processar.',      dismissible: true },
      warning: { id: '3', variant: 'warning', title: 'Aviso',      message: 'Esta ação não pode ser desfeita.', dismissible: true },
      info:    { id: '4', variant: 'info',    title: 'Informação', message: 'Nova versão está disponível.',     dismissible: true }
    },
    imports: [ToastItemComponent]
  })
};

// ---------------------------------------------------------------------------
// Demo interativa — dispara toasts reais com ToastService
// ---------------------------------------------------------------------------

@Component({
  selector: 'toast-demo',
  standalone: true,
  imports: [ToastContainerComponent],
  providers: [ToastService],
  styles: [`
    .demo { padding: 24px; display: flex; flex-direction: column; gap: 16px; max-width: 480px; }
    h4 { margin: 0 0 4px; font-size: 14px; font-weight: 600; color: #333; }
    p  { margin: 0 0 12px; font-size: 13px; color: #696969; }
    .btns { display: flex; flex-wrap: wrap; gap: 10px; }
    button {
      padding: 8px 16px; border: none; border-radius: 6px; font-size: 13px;
      font-weight: 600; cursor: pointer; transition: opacity .15s ease;
    }
    button:hover { opacity: .85; }
    .btn-success { background: #1E7E34; color: #fff; }
    .btn-error   { background: #D0021B; color: #fff; }
    .btn-warning { background: #E5A000; color: #fff; }
    .btn-info    { background: #0033C6; color: #fff; }
    .btn-clear   { background: #eee; color: #333; }
  `],
  template: `
    <div class="demo">
      <div>
        <h4>Toast interativo</h4>
        <p>Clique nos botões abaixo para disparar cada variante do Toast em tempo real.</p>
      </div>
      <div class="btns">
        <button class="btn-success" (click)="showSuccess()">Sucesso</button>
        <button class="btn-error"   (click)="showError()">Erro</button>
        <button class="btn-warning" (click)="showWarning()">Aviso</button>
        <button class="btn-info"    (click)="showInfo()">Informacao</button>
        <button class="btn-clear"   (click)="clear()">Limpar todos</button>
      </div>
    </div>
    <cb-toast-container position="top-right"></cb-toast-container>
  `
})
class ToastDemoComponent {
  private toast = inject(ToastService);

  showSuccess() { this.toast.success('Operacao realizada!', 'Seu pedido foi confirmado com sucesso.'); }
  showError()   { this.toast.error('Ocorreu um erro', 'Nao foi possivel processar sua solicitacao.'); }
  showWarning() { this.toast.warning('Atencao', 'Esta acao nao pode ser desfeita.'); }
  showInfo()    { this.toast.info('Novidade disponivel', 'Uma nova versao do aplicativo esta disponivel.'); }
  clear()       { this.toast.clear(); }
}

export const Interativo: Story = {
  name: 'Demo interativa',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Clique nos botões para disparar toasts reais usando `ToastService`. O container está configurado em `position="top-right"`.'
      }
    }
  },
  render: () => ({
    template: `<toast-demo></toast-demo>`,
    imports: [ToastDemoComponent]
  })
};
