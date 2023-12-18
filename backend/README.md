## Description
Esse é um projeto feito em Nest juntamente com prisma.

Para rodar utilizando docker basta criar o arquivo .env com configuração padrão de banco, basta seguir o .env.example.

Em database mocks encontra-se hospitais , salas e procedimentos mockados para facilitar desenvolvimento de novas funcionalidades e criações de pedidos cirurgicos.


```bash
$ docker-compose up --build -d
```

## Installation

```bash
$ npm install
```

## Running the app

```bash

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```