
# Linguista

Linguista é uma plataforma interativa para ajudar você a aprender novos idiomas com a ajuda de personalidades históricas inspiradoras. O projeto utiliza **Next.js** com **Tailwind CSS** para o frontend e aproveita o **App Router** para gerenciar rotas dinamicamente.

## Tecnologias Utilizadas

- **Next.js**: Framework para React, utilizado para renderizar as páginas no servidor.
- **TypeScript**: Para garantir segurança e escalabilidade no código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e consistente.
- **React Icons**: Pacote de ícones utilizado na interface do usuário.

## Estrutura do Projeto

O projeto segue a estrutura recomendada do Next.js com o App Router habilitado, distribuído da seguinte forma:

- **app/**: Contém as páginas da aplicação.
- **components/**: Componentes reutilizáveis, como Navbar, Sidebar, etc.
- **public/**: Arquivos estáticos como imagens.

### Principais Páginas

1. **Home Page (`app/page.tsx`)**: Exibe a introdução e a lista de personalidades históricas. Contém o `Navbar` com filtros de nível de idioma.
2. **Chat Page (`app/chat/page.tsx`)**: Página para interagir com as personalidades históricas via chat, com sidebar e perfil da personalidade.

## Como Rodar o Projeto

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/linguista.git
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Execute o projeto**:
    ```bash
    npm run dev
    ```

4. **Acesse o projeto**:
    Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura de Componentes

- **Navbar**: Contém a logo e filtros de idioma e dificuldade na Home Page.
- **Sidebar**: Exibe links de navegação como "Explorar", "Chat", etc.
- **ChatSidebar**: Lista de personalidades históricas com quem você está interagindo no chat.
- **ProfileSidebar**: Exibe o perfil da personalidade atual no chat.

---

Made with ❤️ by Linguista Team
