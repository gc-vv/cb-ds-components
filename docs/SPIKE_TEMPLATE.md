# Spike: Arquitetura Frontend - Portal e MFE

## Contexto

Este spike tem como objetivo definir a arquitetura e estrutura inicial do projeto frontend, abrangendo tanto o Portal principal quanto a implementação de Micro Frontends (MFE). Precisamos estabelecer as bases técnicas e organizacionais que permitirão o desenvolvimento escalável e sustentável da aplicação.

**Tipo de Solicitação:** Investigação técnica e definição arquitetural

**Benefícios esperados:**
- Clareza sobre a quantidade de projetos e sua organização
- Definição da estrutura de componentes reutilizáveis
- Estabelecimento de padrões tecnológicos e de gestão
- Redução de riscos técnicos no início do desenvolvimento
- Alinhamento entre times sobre decisões arquiteturais

**Questões principais a investigar:**
- Quantos projetos inicialmente teremos
- Existência e localização de biblioteca de componentes do cliente
- Estrutura de cada projeto (Portal e MFE)
- Formas de gestão das aplicações
- Stack tecnológico de cada aplicação

## Critérios de Aceite

- [ ] **Biblioteca de Componentes:** Identificar se existe alguma lib de componentes fornecida pelo cliente e sua localização
- [ ] **Estrutura MFE:** Definir qual estrutura de Micro Frontend será seguida (Module Federation, Single-SPA, etc.)
- [ ] **Stack Tecnológico:** Documentar todas as tecnologias que serão utilizadas além do Angular
- [ ] **Gestão de Dependências:** Estabelecer como será feita a gestão das dependências entre projetos
- [ ] **Adição de Módulos:** Definir processo para adicionar novos módulos ao ecossistema
- [ ] **Gestão de Módulos:** Estabelecer governança e versionamento dos módulos
- [ ] **Estrutura da Lib de Componentes:** Documentar a arquitetura da biblioteca de componentes
- [ ] **Documentação de Componentes:** Definir ferramenta e processo de documentação (Storybook, Compodoc, etc.)
- [ ] **Estrutura do Portal:** Documentar a arquitetura do projeto Portal
- [ ] **Gestão de Estado:** Definir estratégia de gerenciamento de estado da aplicação (NgRx, Signals, Services, etc.)
- [ ] **MVP Funcional:** Ter um MVP básico do Portal e MFE implementado
- [ ] **Documentação Completa:** Todas as decisões e conclusões documentadas
- [ ] **Próximos Passos:** Histórias de usuário criadas com base nas conclusões do spike

## Dependências

- [ ] Acesso ao repositório/documentação do cliente (se houver biblioteca de componentes existente)
- [ ] Definição de requisitos não-funcionais (performance, compatibilidade de browsers, etc.)
- [ ] Alinhamento com time de backend sobre contratos de API (se necessário para MVP)
- [ ] Aprovação de stakeholders sobre decisões arquiteturais críticas

## Refinamento Técnico

### Escopo Detalhado

**Inclui:**
- Arquitetura frontend (Portal + MFE)
- Organização e estrutura de código
- Definição de biblioteca de componentes
- Padrões de desenvolvimento e documentação
- Estratégias de gestão de estado e dependências

**Não inclui:**
- Integração detalhada com backend
- Configuração de pipeline de deploy
- Implementação de features de negócio

### Áreas de Investigação

#### 1. Biblioteca de Componentes
- Verificar existência de design system ou biblioteca do cliente
- Avaliar tecnologias: Storybook, Compodoc, Zeroheight
- Definir estrutura de pastas (`src/app/ui/` ou `projects/ui-library/`)
- Estabelecer padrões de API de componentes (inputs, outputs, estados)

#### 2. Arquitetura MFE
- Avaliar abordagens: Module Federation (Webpack 5), Single-SPA, Native Federation
- Definir comunicação entre micro frontends
- Estabelecer estratégia de roteamento
- Definir shared dependencies vs. isolamento

#### 3. Projeto Portal
- Estrutura de pastas e módulos
- Integração com MFEs
- Gestão de autenticação e autorização
- Layout e navegação principal

#### 4. Gestão de Estado
- Avaliar opções: NgRx, Akita, Elf, Angular Signals, Services com RxJS
- Definir padrões de comunicação entre componentes
- Estabelecer estratégia de cache e sincronização

### Documentações de Referência

- **Angular:** https://angular.dev
- **Module Federation:** https://webpack.js.org/concepts/module-federation/
- **Storybook Angular:** https://storybook.js.org/docs/angular
- **NgRx:** https://ngrx.io/docs
- **Angular Signals:** https://angular.dev/guide/signals
- **Micro Frontends:** https://micro-frontends.org/

### Timebox

**Duração máxima:** 5 dias

**Distribuição sugerida:**
- Dia 1-2: Investigação e análise de opções
- Dia 3-4: Implementação de MVP e validação técnica
- Dia 5: Documentação e definição de próximos passos
