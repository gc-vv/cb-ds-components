import type { Meta, StoryObj } from '@storybook/angular';

import { SelectComponent } from '@cb/ds-components/select';

const voltageOptions = [
  { value: '110v', label: '110V' },
  { value: '220v', label: '220V' },
];

const meta: Meta<SelectComponent> = {
  title: 'UI/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto utilizado para descrever o campo do formulário.'
    },
    helperText: {
      control: 'text',
      description: 'Texto utilizado para auxiliar o usuário a preencher o campo.'
    },
    errorMessage: {
      control: 'text',
      description: 'Texto de erro que será exibido quando o campo estiver inválido.'
    },
    isRequired: {
      control: 'boolean',
      description: 'Se `true`, o controle do formulário será obrigatório.'
    },
    showRequiredIndicator: {
      control: 'boolean',
      description: 'Se `true`, o controle do formulário mostrará um indicador de obrigatório.'
    },
    isDisabled: {
      control: 'boolean',
      description: 'Se `true`, o controle do formulário será desativado.'
    },
    isInvalid: {
      control: 'boolean',
      description: 'Se `true`, o controle do formulário será inválido.'
    },
    isReadOnly: {
      control: 'boolean',
      description: 'Se `true`, o controle do formulário será somente leitura.'
    },
    options: {
      control: 'object',
      description: 'Opções para o menu de seleção que o componente receberá.'
    }
  },
  args: {
    label: 'Selecione uma opção',
    helperText: 'Escolha a voltagem do produto',
    errorMessage: 'Campo obrigatório',
    isRequired: false,
    showRequiredIndicator: true,
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    options: voltageOptions
  }
};

export default meta;

type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    options: voltageOptions
  }
};

export const HelperText: Story = {
  name: 'Texto de ajuda',
  parameters: {
    docs: {
      description: {
        story: 'Utilize a propriedade `helperText` para adicionar um texto de ajuda ao campo.'
      }
    }
  },
  args: {
    label: 'Selecione uma opção',
    helperText: 'Escolha a voltagem do produto',
    options: voltageOptions
  }
};

export const Required: Story = {
  name: 'Obrigatório',
  parameters: {
    docs: {
      description: {
        story: 'Utilize a propriedade `isRequired` para tornar o campo obrigatório. Caso não queira exibir o indicador de campo obrigatório, utilize a propriedade `showRequiredIndicator` com o valor `false`.'
      }
    }
  },
  args: {
    label: 'Selecione uma opção',
    isRequired: true,
    options: voltageOptions
  }
};

export const Invalid: Story = {
  name: 'Inválido',
  parameters: {
    docs: {
      description: {
        story: 'Utilize a propriedade `isInvalid` para tornar o campo inválido.'
      }
    }
  },
  args: {
    label: 'Selecione uma opção',
    isInvalid: true,
    errorMessage: 'Campo obrigatório',
    options: voltageOptions
  }
};

export const Disabled: Story = {
  name: 'Desabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Utilize a propriedade `isDisabled` para desabilitar o campo. Obs.: O campo desabilitado não pode ser editado e não receberá foco.'
      }
    }
  },
  args: {
    label: 'Selecione uma opção',
    isDisabled: true,
    options: voltageOptions
  }
};

export const ReadOnly: Story = {
  name: 'Somente leitura',
  parameters: {
    docs: {
      description: {
        story: 'Utilize a propriedade `isReadOnly` para tornar o campo somente leitura. Obs.: O campo somente leitura não pode ser editado, mas pode receber foco.'
      }
    }
  },
  args: {
    label: 'Selecione uma opção',
    isReadOnly: true,
    options: voltageOptions
  }
};

export const ExtraProps: Story = {
  name: 'Propriedades extras',
  parameters: {
    docs: {
      description: {
        story: 'Utilize as propriedades `labelProps`, `helperTextProps` e `` para adicionar propriedades extras ao rótulo, texto de ajuda e texto de erro, respectivamente.'
      }
    }
  },
  args: {
    label: 'Selecione uma opção',
    helperText: 'Escolha a voltagem do produto',
    options: voltageOptions
  }
};
