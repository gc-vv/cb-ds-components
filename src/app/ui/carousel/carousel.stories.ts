import type { Meta, StoryObj } from '@storybook/angular';

import { CarouselComponent } from '@cb/ds-components/carousel';
import { CarouselSlideComponent } from '@cb/ds-components/carousel';

const SLIDE_STYLE = 'width:100%;height:300px;display:flex;align-items:flex-start;justify-content:center;color:white;padding:8px;box-sizing:border-box';

const SLIDES_4 = `
  <cb-carousel-slide><div style="${SLIDE_STYLE};background:blue">Slide 1</div></cb-carousel-slide>
  <cb-carousel-slide><div style="${SLIDE_STYLE};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
  <cb-carousel-slide><div style="${SLIDE_STYLE};background:green">Slide 3</div></cb-carousel-slide>
  <cb-carousel-slide><div style="${SLIDE_STYLE};background:black">Slide 4</div></cb-carousel-slide>
`;

const meta: Meta<CarouselComponent> = {
  title: 'UI/Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Usado para exibir uma coleção de elementos.'
      }
    }
  },
  argTypes: {
    withControls: {
      control: 'boolean',
      description: 'Exibe ou não os botões de navegação (variante responsiva).'
    },
    withIndicators: {
      control: 'boolean',
      description: 'Exibe ou não as bolinhas de navegação (variante responsiva).'
    },
    withGutter: {
      control: 'boolean',
      description: 'Adiciona ou não o espaçamento entre os itens.'
    },
    controlsPosition: {
      control: 'select',
      options: ['inside', 'outside'],
      description: 'Posição dos controles. "outside" requer espaço lateral para não estourar a largura da tela.'
    },
    autoPlay: {
      control: 'boolean',
      description: "Habilita modo de reprodução automática. Caso true, o botão de 'play/pause' será exibido. O tempo de duração é 8 segundos."
    },
    slidesToScroll: {
      control: 'number',
      description: 'Quantidade de itens exibidos por página (variante responsiva).'
    },
    draggable: {
      control: 'boolean',
      description: 'Habilita deslizar/arrastar.'
    },
    loop: {
      control: 'boolean',
      description: 'Habilita a navegação circular entre os itens.'
    },
    sidePadding: {
      control: 'boolean',
      description: 'Habilita a exibição parcial do primeiro elemento da próxima página.'
    }
  },
  args: {
    withControls: true,
    withIndicators: false,
    withGutter: false,
    controlsPosition: 'inside',
    autoPlay: false,
    slidesToScroll: 1,
    draggable: true,
    loop: false,
    sidePadding: false
  }
};

export default meta;

type Story = StoryObj<CarouselComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <cb-carousel
        [withControls]="withControls"
        [withIndicators]="withIndicators"
        [withGutter]="withGutter"
        [controlsPosition]="controlsPosition"
        [autoPlay]="autoPlay"
        [slidesToScroll]="slidesToScroll"
        [draggable]="draggable"
        [loop]="loop"
        [sidePadding]="sidePadding"
      >
        ${SLIDES_4}
      </cb-carousel>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

const S = SLIDE_STYLE;

export const SideControls: Story = {
  name: 'Controles laterais',
  render: () => ({
    template: `
      <div style="padding: 0 56px">
        <cb-carousel [withControls]="true" controlsPosition="outside">
          <cb-carousel-slide><div style="${S};background:blue">Slide 1</div></cb-carousel-slide>
          <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
        </cb-carousel>
      </div>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

export const Indicators: Story = {
  name: 'Indicadores',
  render: () => ({
    template: `
      <cb-carousel [withControls]="true" [withIndicators]="true">
        <cb-carousel-slide><div style="${S};background:blue">Slide 1</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
      </cb-carousel>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

export const WithGutter: Story = {
  name: 'Espaçamento',
  render: () => ({
    template: `
      <cb-carousel [withGutter]="true" [slidesToScroll]="3">
        <cb-carousel-slide><div style="${S};background:blue">Slide 1</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:blue">Slide 3</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 4</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:blue">Slide 5</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 6</div></cb-carousel-slide>
      </cb-carousel>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

export const Loop: Story = {
  name: 'Navegação circular',
  render: () => ({
    template: `
      <cb-carousel [loop]="true">
        <cb-carousel-slide><div style="${S};background:blue">Slide 1</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
      </cb-carousel>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

export const SlidesPerPage: Story = {
  name: 'Slides por página',
  render: () => ({
    template: `
      <cb-carousel [slidesToScroll]="3" [loop]="true">
        <cb-carousel-slide><div style="${S};background:blue">Slide 1</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:blue">Slide 3</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 4</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:blue">Slide 5</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 6</div></cb-carousel-slide>
      </cb-carousel>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

export const Draggable: Story = {
  name: 'Clica e arrasta',
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:16px">
        <cb-carousel [draggable]="true">
          <cb-carousel-slide><div style="${S};background:#8B1A1A">Clique e arraste 2</div></cb-carousel-slide>
          <cb-carousel-slide><div style="${S};background:blue">Clique e arraste 1</div></cb-carousel-slide>
        </cb-carousel>
        <cb-carousel [draggable]="false">
          <cb-carousel-slide><div style="${S};background:green">Clique e arraste desabilitado 1</div></cb-carousel-slide>
          <cb-carousel-slide><div style="${S};background:#8B1A1A">Clique e arraste desabilitado 2</div></cb-carousel-slide>
        </cb-carousel>
      </div>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

export const SidePadding: Story = {
  name: 'Exibição parcial',
  render: () => ({
    template: `
      <cb-carousel [sidePadding]="true">
        <cb-carousel-slide><div style="${S};background:blue">Slide 1</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:green">Slide 3</div></cb-carousel-slide>
      </cb-carousel>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};

export const AutoPlay: Story = {
  name: 'Mudança de página automática',
  render: () => ({
    template: `
      <cb-carousel [autoPlay]="true" [loop]="true">
        <cb-carousel-slide><div style="${S};background:blue">Slide 1</div></cb-carousel-slide>
        <cb-carousel-slide><div style="${S};background:#8B1A1A">Slide 2</div></cb-carousel-slide>
      </cb-carousel>
    `,
    imports: [CarouselComponent, CarouselSlideComponent]
  })
};
