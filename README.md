# HubLocal Challenge

## Repositório criado para resolução do case para a vaga de Fullstack Javascript Developer (Pleno) na HubLocal

## Explicando o case

    Implementação de uma aplicação que deve ser possível, realizar Login, Criar usuários. E também Criar, Listar, Editar e Deletar empresas (quando o usuário estiver logado) e Criar, Listar, Editar e Deletar locais (quando o usuário estiver logado).

## Tecnologias usadas na aplicação

* NestJS 
* Prisma
* Postgres
* Docker
* JWT para autenticação
* Jest
* Swagger

## Como o projeto rodar na sua máquina

### Tecnologias necessárias

* Node
* npm
* Docker
* Docker-compose

### Clone o repositório

```bash
git clone https://github.com/Wuirlen/backendHubLocal.git
```

### Acesse o projeto pelo terminal

```bash
cd backend
```

### Abra na sua IDE favorita

```bash
code .
```

### Instale as dependências

```bash
npm i
```

### Preencha os dados em um arquivo .env.development

```bash
DATABASE_URL=
JWT_SECRET=
PORT=
```

### Levante o container do banco de dados com o seguinte comando

```bash
npm run docker:up -> Para subir o banco de dados Postgres
```

### Use as seguintes linhas de comando para subir o projeto

```bash
npm run db:migrate -> Roda as migrations
npm run start:dev -> Inicia o app
npm run test:cov -> Roda os testes
```
This is a challenge by [Coodesh](https://coodesh.com/).