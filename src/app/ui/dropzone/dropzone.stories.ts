import type { Meta, StoryObj } from '@storybook/angular';

import { DropzoneComponent, type DropzoneFile } from '@cb/ds-components/dropzone';

const MOCK_FILES: DropzoneFile[] = [
  { id: '1', name: 'nomedoarquivo.png', size: 204800, progress: 0, file: new File([], 'nomedoarquivo.png') },
  { id: '2', name: 'nomedoarquivo.png', size: 512000, progress: 0, file: new File([], 'nomedoarquivo.png') },
  { id: '3', name: 'nomedoarquivo.png', size: 102400, progress: 0, file: new File([], 'nomedoarquivo.png') },
  { id: '4', name: 'nomedoarquivo.png', size: 307200, progress: 0, file: new File([], 'nomedoarquivo.png') },
  { id: '5', name: 'nomedoarquivo.png', size: 819200, progress: 0, file: new File([], 'nomedoarquivo.png') },
];

const MOCK_FILES_PROGRESS: DropzoneFile[] = [
  { id: '1', name: 'foto-perfil.png', size: 204800, progress: 100, file: new File([], 'foto-perfil.png') },
  { id: '2', name: 'banner-home.png', size: 512000, progress: 65, file: new File([], 'banner-home.png') },
  { id: '3', name: 'produto-frente.png', size: 102400, progress: 30, file: new File([], 'produto-frente.png') },
];

const meta: Meta<DropzoneComponent> = {
  title: 'UI/Dropzone',
  component: DropzoneComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O Dropzone permite que os arquivos sejam carregados de forma intuitiva. Ao deslocar um arquivo por meio de Arrastar e Soltar, a área na qual ele pode ser depositado pode ser destacada graficamente.'
      }
    }
  },
  argTypes: {
    title:       { control: 'text' },
    description: { control: 'text' },
    label:       { control: 'text' },
    accept:      { control: 'text' },
    maxSizeMb:   { control: 'number', table: { defaultValue: { summary: '500' } } },
    multiple:    { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
    className:   { control: 'text' }
  },
  args: {
    title: 'Dropzone',
    description: 'Apenas arquivos .png de até 500 MB ou menos',
    label: 'Arraste e solte os arquivos aqui ou clique para fazer upload',
    accept: '.png',
    maxSizeMb: 500,
    multiple: true,
    files: [],
    className: ''
  },
  render: (args) => ({
    props: args,
    template: `
      <cb-dropzone
        [title]="title"
        [description]="description"
        [label]="label"
        [accept]="accept"
        [maxSizeMb]="maxSizeMb"
        [multiple]="multiple"
        [files]="files"
        [className]="className"
      ></cb-dropzone>
    `,
    imports: [DropzoneComponent]
  })
};

export default meta;
type Story = StoryObj<DropzoneComponent>;

export const Default: Story = {
  name: 'Default'
};

export const ComArquivos: Story = {
  name: 'Com arquivos (0%)',
  args: { files: MOCK_FILES }
};

export const ComProgresso: Story = {
  name: 'Com progresso',
  args: { files: MOCK_FILES_PROGRESS }
};

export const SemTitulo: Story = {
  name: 'Sem título',
  args: { title: '', description: '' }
};
