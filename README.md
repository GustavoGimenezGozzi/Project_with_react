# CardioLife

Projeto em ReactJS para estudos em Front-end e Medicina (Cardiologia)

## Descrição

CardioLife é uma aplicação educacional desenvolvida com React 19.1 e Vite, focada no aprendizado de conceitos fundamentais do React através de um sistema de cardiologia.

## Tecnologias Utilizadas

- **React 19.1** - Biblioteca principal para construção da interface
- **Vite** - Ferramenta de build e desenvolvimento
- **Styled Components** - Biblioteca para estilização CSS-in-JS
- **ESLint** - Linter para qualidade do código

## Estrutura do Projeto

```
src/
├── components/
│   ├── ExemploJSX.jsx          # Componente básico com JSX
│   ├── EstiloInline.jsx        # Estilização inline
│   ├── RelatorioPaciente.jsx    # Componente com props
│   ├── ListaExames.jsx         # Renderização de listas
│   └── CardPaciente.jsx        # Componente com styled-components
├── context/
│   └── PacienteContext.jsx     # Context API para estado global
├── app.jsx                     # Componente principal
└── main.jsx                   # Ponto de entrada da aplicação
```

## Funcionalidades Implementadas

### 1. Componentes JSX Básicos
- Interpolação de variáveis no JSX
- Estrutura básica de componentes funcionais

### 2. Estilização
- Estilos inline com objetos JavaScript
- Styled Components para componentes reutilizáveis

### 3. Props e Reutilização
- Passagem de dados entre componentes
- Componentes reutilizáveis com props dinâmicas

### 4. Renderização de Listas
- Uso do método `.map()` para renderizar arrays
- Implementação de keys para otimização

### 5. Context API
- Compartilhamento de estado global
- Provider pattern para disponibilizar dados

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:5173` no navegador

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## Conceitos React Demonstrados

- **JSX**: Sintaxe que combina HTML e JavaScript
- **Componentes**: Unidades reutilizáveis da interface
- **Props**: Passagem de dados entre componentes
- **Estado**: Gerenciamento de dados dinâmicos
- **Context API**: Compartilhamento de estado global
- **Styled Components**: CSS-in-JS para estilização
- **Renderização de Listas**: Exibição dinâmica de dados

## Próximos Passos

Este projeto serve como base para aprender conceitos mais avançados do React, como:
- Hooks personalizados
- Gerenciamento de estado com Redux
- Roteamento com React Router
- Testes com Jest e React Testing Library
- Integração com APIs

## Contribuição

Este é um projeto educacional. Sinta-se à vontade para experimentar e adicionar novas funcionalidades para praticar os conceitos do React.