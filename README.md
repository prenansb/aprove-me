# Projeto Recebíveis Bankme

## Link do Projeto

[https://aprove-me-z7ft.vercel.app/login](https://aprove-me-z7ft.vercel.app)

## Funcionalidades Implementadas

### Back-end

- [x] **Nível 1 - Validação**
- [x] **Nível 2 - Persistência**
- [x] **Nível 3 - Testes**
- [x] **Nível 4 - Autenticação**
- [x] **Nível 5 - Gerenciamento de Permissões**

### Front-end

- [x] **Nível 1 - Cadastro**
- [x] **Nível 2 - Conectando na API**
- [x] **Nível 3 - Listando**
- [x] **Nível 4 - Autenticação**


## Como Executar

1.  **Clone o repositório**
    
        git clone https://github.com/prenansb/aprove-me.git
        cd aprove-me
        
    
2.  **Instale as dependências do Back-end**
    
        cd api
        pnpm install
        
    
3.  **Configure as variáveis de ambiente do Back-end**
    
    Crie um arquivo `.env` na pasta `backend` com o seguinte conteúdo:
    
        PORT=3333
        DATABASE_URL="file:./dev.db"
        JWT_SECRET="9fG7$kL2@mP4#sD8!vB1^zX5&eC3*wQ6%tY0@uN9#hJ7"
        
    
4.  **Configure o banco de dados**
    
    Certifique-se de que o Prisma está configurado corretamente.
    
        pnpm prisma generate
        
    
5.  **Execute o Back-end**
    
        pnpm start:dev
        
    
6.  **Instale as dependências do Front-end**
    
        cd ../web
        pnpm install
        
    
7.  **Configure as variáveis de ambiente do Front-end**
    
    Crie um arquivo `.env` na pasta `web` com o seguinte conteúdo:
    
        NEXT_PUBLIC_API_URL=http://localhost:3333/
        
    
8.  **Execute o Front-end**
    
        pnpm dev
        
    
9.  **Acesse o projeto**
    *   Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000) para acessar o front-end localmente.
    *   Alternativamente, você pode acessar a versão hospedada em [https://aprove-me-z7ft.vercel.app](https://aprove-me-z7ft.vercel.app/login).

Notas Adicionais
----------------
*   **Estrutura de Pastas:**
    *   `api`: Contém o código do back-end.
    *   `web`: Contém o código do front-end.
    
*   **Variáveis de Ambiente:**
    *   **Back-end:**
        *   `PORT`: Porta onde o back-end irá rodar.
        *   `DATABASE_URL`: URL do banco de dados SQLite.
        *   `JWT_SECRET`: Chave secreta para geração de tokens JWT.
    *   **Front-end:**
        *   `NEXT_PUBLIC_API_URL`: URL base da API para o front-end se comunicar.
