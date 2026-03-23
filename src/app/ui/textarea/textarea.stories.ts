import type { Meta, StoryObj } from '@storybook/angular';

import { TextareaComponent } from '@cb/ds-components/textarea';

const meta: Meta<TextareaComponent> = {
  title: 'UI/TextArea',
  component: TextareaComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Representa um controle de edição de texto simples de várias linhas, útil quando você deseja permitir que os usuários insiram uma quantidade considerável de texto de formato livre.'
      }
    }
  },
  argTypes: {
    label: {
      description: 'Texto utilizado para descrever o campo do formulário.',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    errorMessage: {
      description: 'Texto de erro que será exibido quando o campo estiver inválido.',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    helperText: {
      description: 'Texto utilizado para auxiliar o usuário a preencher o campo.',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    placeholder: {
      description: '',
      control: 'text',
      table: { type: { summary: 'string' } }
    },
    resize: {
      description: 'Indica se o componente poderá ser redimensionado pelo usuário.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } }
    },
    isRequired: {
      description: 'Se true, o controle do formulário será obrigatório.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } }
    },
    showRequiredIndicator: {
      description: 'Se true, o controle do formulário mostrará um indicador de obrigatório.',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' }, type: { summary: 'boolean' } }
    },
    isDisabled: {
      description: 'Se true, o controle do formulário será desativado.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } }
    },
    isInvalid: {
      description: 'Se true, o controle do formulário será inválido.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } }
    },
    isReadOnly: {
      description: 'Se true, o controle do formulário será somente leitura.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' }, type: { summary: 'boolean' } }
    },
    className: { control: 'text' }
  },
  args: {
    label: 'O que você achou do produto?',
    errorMessage: 'Campo obrigatório',
    helperText: '',
    placeholder: 'Conte-nos sobre os prós e contras, com o máximo de detalhes possível.',
    resize: false,
    isRequired: false,
    showRequiredIndicator: true,
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    className: ''
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width:320px;margin:0 auto;padding:24px">
        <cb-textarea
          [label]="label"
          [errorMessage]="errorMessage"
          [helperText]="helperText"
          [placeholder]="placeholder"
          [resize]="resize"
          [isRequired]="isRequired"
          [showRequiredIndicator]="showRequiredIndicator"
          [isDisabled]="isDisabled"
          [isInvalid]="isInvalid"
          [isReadOnly]="isReadOnly"
          [className]="className"
        ></cb-textarea>
      </div>
    `,
    imports: [TextareaComponent]
  })
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  name: 'Default'
};

export const TextoDeAjuda: Story = {
  name: 'Texto de ajuda',
  parameters: {
    docs: { description: { story: 'Utilize a propriedade `helperText` para adicionar um texto de ajuda ao campo.' } }
  },
  args: { helperText: 'Faça um comentário sobre o produto.', placeholder: '' }
};

export const Placeholder: Story = {
  name: 'Placeholder',
  parameters: {
    docs: { description: { story: 'Utilize a propriedade `placeholder` para adicionar um texto auxiliar ao campo.' } }
  }
};

export const Obrigatorio: Story = {
  name: 'Obrigatório',
  parameters: {
    docs: { description: { story: 'Utilize a propriedade `isRequired` para tornar o campo obrigatório.' } }
  },
  args: { isRequired: true, placeholder: '' }
};

export const Invalido: Story = {
  name: 'Inválido',
  parameters: {
    docs: { description: { story: 'Utilize a propriedade `isInvalid` para tornar o campo inválido.' } }
  },
  args: { isInvalid: true, placeholder: '' }
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  parameters: {
    docs: { description: { story: 'Utilize a propriedade `isDisabled` para desabilitar o campo.' } }
  },
  args: { isDisabled: true }
};

export const SomenteLeitura: Story = {
  name: 'Somente leitura',
  parameters: {
    docs: { description: { story: 'Utilize a propriedade `isReadOnly` para tornar o campo somente leitura.' } }
  },
  render: () => ({
    template: `
      <div style="max-width:320px;margin:0 auto;padding:24px">
        <cb-textarea
          label="O que você achou do produto?"
          [isReadOnly]="true"
          [value]="'Gostei muito do produto! Veio bem embalado e a entrega foi bem rápida. Recomendo!'"
        ></cb-textarea>
      </div>
    `,
    imports: [TextareaComponent]
  })
};

export const Redimensionamento: Story = {
  name: 'Redimensionamento',
  parameters: {
    docs: { description: { story: 'Utilize a propriedade `resize` para indicar se o componente poderá ser redimensionado pelo usuário.' } }
  },
  args: { resize: true }
};
