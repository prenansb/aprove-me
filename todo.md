# Todo List - Desafio Bankme

## Back-end

### Nível 1 - Validação
- [X] Criar um projeto NestJS.
- [X] Criar rota `POST /integrations/payable` para cadastrar recebíveis.
- [X] Implementar validações:
  - [X] Verificar se nenhum campo está nulo.
  - [X] Validar se os IDs são do tipo UUID.
  - [X] Garantir que as strings não excedam o limite de caracteres definido.
- [ ] Retornar erros com mensagens específicas caso as validações falhem.
- [X] Retornar os dados validados em formato JSON.

### Nível 2 - Persistência
- [X] Configurar Prisma e banco de dados SQLite.
- [X] Criar models para recebíveis e cedentes no Prisma.
- [X] Implementar lógica para salvar dados validados no banco.
- [X] Criar rota `GET /integrations/payable/:id` para buscar um recebível pelo ID.
- [X] Criar rota `GET /integrations/assignor/:id` para buscar um cedente pelo ID.
- [ ] Criar rotas para operações de:
  - [ ] Edição de recebíveis e cedentes.
  - [ ] Exclusão de recebíveis e cedentes.
  - [ ] Cadastro de recebíveis e cedentes.

### Nível 3 - Testes
- [ ] Escrever testes unitários para cada funcionalidade do backend.
- [ ] Garantir que todos os testes passem.

### Nível 4 - Autenticação
- [ ] Criar rota `POST /integrations/auth` para autenticação.
  - [ ] Validar credenciais `login` e `password`.
  - [ ] Retornar JWT com expiração de 1 minuto.
- [ ] Adicionar middleware para validar JWT em todas as rotas existentes.
- [ ] Retornar mensagem "Não autorizado" caso o JWT seja inválido ou expirado.

### Nível 5 - Gerenciamento de permissões
- [ ] Criar cadastro de permissões com login e senha no banco.
- [ ] Refatorar autenticação para verificar login e senha no banco antes de gerar JWT.

### Nível 6 - Infra e Doc
- [ ] Criar um `Dockerfile` para a API.
- [ ] Criar `docker-compose.yaml` para o projeto.
- [ ] Documentar o projeto:
  - [ ] Como preparar o ambiente.
  - [ ] Como instalar dependências.
  - [ ] Como rodar o projeto.

### Nível 7 - Lotes
- [ ] Criar rota `POST /integrations/payable/batch` para receber lotes de até 10.000 pagáveis.
- [ ] Implementar lógica para enfileirar os pagáveis.
- [ ] Criar consumidor para processar os pagáveis da fila:
  - [ ] Criar registros no banco.
  - [ ] Enviar e-mail com resumo do lote processado (sucessos e falhas).

### Nível 8 - Resiliência
- [ ] Reprocessar itens falhos até 4 vezes em caso de erro.
- [ ] Mover itens falhos para uma "Fila Morta" após 4 tentativas.
- [ ] Enviar e-mail ao time de operações com detalhes dos itens na Fila Morta.

### Nível 9 - Cloud
- [ ] Criar pipeline de deploy em estrutura de Cloud (AWS, Google Cloud ou Azure).

### Nível 10 - Infraestrutura como Código
- [ ] Usar Terraform para provisionar a infraestrutura necessária.

---

## Front-end

### Nível 1 - Cadastro
- [ ] Criar interface para cadastro de pagáveis.
- [ ] Implementar validações para evitar cadastro de campos vazios ou inválidos.
- [ ] Exibir pagável cadastrado em uma nova tela.

### Nível 2 - Conectando na API
- [ ] Conectar a interface ao backend via API.
- [ ] Implementar cadastro de pagáveis com integração à API.
- [ ] Criar tela para cadastro de cedentes.
- [ ] Alterar cadastro de pagáveis para usar um combobox para selecionar cedentes.

### Nível 3 - Listando
- [ ] Criar sistema de listagem de pagáveis:
  - [ ] Exibir apenas `id`, `value` e `emissionDate`.
  - [ ] Adicionar link para detalhes de cada pagável.
- [ ] Implementar página de detalhes de pagável.
- [ ] Incluir link na página de detalhes do pagável para exibir dados do cedente.
- [ ] Adicionar opções de edição e exclusão nos itens listados.

### Nível 4 - Autenticação
- [ ] Implementar sistema de login e senha.
- [ ] Armazenar token JWT no `localStorage`.
- [ ] Redirecionar o usuário para a página de login caso o token expire.

### Nível 5 - Testes
- [ ] Escrever testes para validação de todas as funcionalidades do front-end.
- [ ] Garantir que todos os testes passem.
