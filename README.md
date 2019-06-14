# Projeto feito seguindo a semana Omnistack 7 da Rocketseat, utilizando Sequelize e banco de dados MySQL.

Ao baixar ou clonar este repositório siga os passos abaico:

```
npm install ou yarn install
```

Crie um banco de dados no MySql e altere o arquivo database.js
que está na pasta config, com os seus dados de usuário e senha.
E o nome do banco criado.

# Rode o comando abaixo para criar a tabela no banco

```
npx sequelize-cli db:migrate
```

# Para testar a API rode o comando abaixo

```
yarn dev
```

Abra um programa de teste de endpoints. Pode ser o Postman ou Insomnia, ou outro de sua prefrência.

Acesse o endereço http://localhost:3333/posts
