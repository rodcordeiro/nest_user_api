- [x] Endpoints para
    - [x] Criar
        - [x] name: tipo string obrigatória com no mínimo 2 caracteres e no máximo 100.
        - [x] birthdate: tipo date obrigatório.
        - [x] zipcode: tipo string obrigatório.
        - [x] acceptedTerms: tipo boolean.
        - [x] Antes de armazenar dados do usuário você deve buscar informações sobre o
          logradouro, bairro, cidade e estado dele para poder salvar junto. Para isso, você
          pode realizar uma request em uma API pública de busca de CEP utilizando o
          ZIPCODE enviado no body
    - [x] Atualizar

    - [x] No método de ATUALIZAÇÃO do usuário você deve inserir a data do momento da
          atualização no campo updatedAt.

    - [x] Deletar
        - [x] Adicionar um Guard na request de método DELETE para não permitir deletar
            usuário caso não seja fornecido no header o parâmetro: “access-token” cujo valor é
            igual a “meegu”
    - [x] Buscar todos usuários
    - [x] Buscar um único usuário pelo ID dele
- [x] Escrever um README com uma breve descrição sobre o projeto e como iniciá-lo.

<!-- Adicionais -->
- [ ] Armazenamento dos dados em uma base MySQL utilizando o docker-compose.
- [ ] Caso opte por utilizar um banco de dados relacional, você pode utilizar o ORM Prisma.io.
- [ ] Incluir no projeto regras de Lint.
- [x] No método POST, validar se o usuário tem pelo menos 18 anos para poder efetuar o cadastro.
- [ ] Escrever ao menos 1 teste unitário para cada função do CRUD.
- [x] Construir uma collection no Postman com todas as requests.
- [x] No método GET adicionar filtro pelo nome utilizando queryparam.
