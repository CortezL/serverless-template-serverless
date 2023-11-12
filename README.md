# Projeto Serverless com Node.js

Este é um projeto Serverless utilizando Node.js, com estrutura organizada para facilitar o desenvolvimento e o deployment de funções Lambda.

## Estrutura do Projeto

- **`configserverless/`**: Contém o arquivo `mapping.json` utilizado pela biblioteca `serverless-aws-resource-names`.

- **`scripts/`**: Diretório com scripts úteis para facilitar tarefas comuns:

  - **`deployDependencies.sh`**: Script para realizar o deploy do layer contendo as dependências (`node_modules`). Este script chama `packModules.cjs`.

  - **`deployFunction.cjs`**: Script que concatena o arquivo `serverless.yml` principal com o `serverless.yml` da função Lambda localizada em `src/functions/{functionName}`. Para executar o deploy da função, utilize o comando `npm run deploy hello` (substitua "hello" pelo nome da função desejada).

  - **`packModules.cjs`**: Gera um arquivo `.zip` contendo o `node_modules` para ser usado na criação do layer de dependências.

  - **`startFunctions.cjs`**: Concatena o arquivo `serverless.yml` principal com os arquivos `serverless.yml` de cada função localizada em `src/functions/{functionName}`. Este script inicia o Serverless Offline, permitindo a execução local das funções.

- **`src/`**: Contém o código-fonte do projeto.

  - **`functions/`**: Diretório que contém as funções Lambda.

    - **`hello/`**: Exemplo de uma função Lambda chamada "hello".

      - **`handler.js`**: Arquivo contendo o código do handler da função Lambda.

      - **`config.yml`**: Arquivo YAML com as configurações específicas da função Lambda.

  - **`layers/`**: Diretório para a definição de camadas.

    - **`servicesNodeModules/`**: Exemplo de camada para armazenar o `node_modules`.

      - **`serverless.yml`**: Configuração do Serverless para a criação da camada.

- **`package.json`**: Arquivo de configuração do Node.js contendo as dependências e scripts úteis.

- **`serverless-env.yml`**: Arquivo YAML utilizado para configurar propriedades que serão usadas no `serverless.yml` principal.

- **`serverless.yml`**: Arquivo principal de configuração Serverless.

## Scripts

- **`npm run deploy-dependencies`**: Executa o script `deployDependencies.sh` para fazer o deploy do layer com as dependências.

- **`npm run deploy {functionName}`**: Executa o script `deployFunction.cjs` para fazer o deploy da função Lambda específica. Substitua `{functionName}` pelo nome da função desejada.

- **`npm run start`**: Executa o script `startFunctions.cjs` para iniciar o Serverless Offline e permitir a execução local das funções.

## Como Usar

1. **Instalação de Dependências:**
   ```bash
   npm install

2. **Deploy das Dependências:**
   ```bash
   npm run deploy-dependencies

2. **Deploy de uma Função Lambda:**
   ```bash
   npm run deploy {functionName}

2. **Execução Local das Funções:**
   ```bash
   npm run start
