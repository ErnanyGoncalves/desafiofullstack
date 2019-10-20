# Javascript Questions from Stackoverflow

Projeto criado afim de trazer perguntas do Stackoverflow relacionadas à **Javascript** através da utilização da API do site.

## Instalação

Antes de ser possível de executar o programa, é necessário a instalação de certos pacotes no computador.

### Node.JS (NPM)
Primeiramente é de extrema importância estar com o Node.JS (NPM) instalado. Com ele é possivel inicializar um projeto, instalar pacotes de terceiros, instalar os pacotes do projeto e executar o servidor. Para isso:

- É necessário acessar o site do [NodeJs](https://nodejs.org/en/) e baixar a versão mais atual;
- Após a instalação e utilizando o terminal, é preciso ir nos diretórios **AngularClient** (desafiofullstack/AngularClient) e, em seguida, do **GraphQLServer** (desafiofullstack/GraphQLServer) para executar o comando `npm install`;
- Afim de iniciar a execução do servidor, esteja no diretório do **GraphQLServer** (desafiofullstack/GraphQLServer) e execute `npm start`. 

> **Atenção:** a forma de execução do Angular é diferente e será explicado agora. 

### Angular CLI

Em seguida, é necessário a instalação do Angular CLI. Ele permite a criação de projetos, componentes, serviços e realizar a execução ao vivo do projeto. Para instalá-lo:
- É necessário executar o comando `npm install -g @angular/cli` pelo terminal;
- Em seguida é preciso estar no diretório do **AngularClient** (desafiofullstack/AngularClient) utilizando o terminal;
- E para executar o projeto, é preciso executar o comando `ng serve`.

> Para mais informações acesse o site do [AngularCLI](https://cli.angular.io/).


## Front-end - Angular

No front-end é possível escolher e determinar alguns parâmetros antes da realização da busca. Sendo eles:
- `Score`: o número mínimo de votos que a pergunta recebeu - (Somente disponível quando a forma de ordenação escolhido é igual a `Votes`);
- `Sort`: como as perguntas serão ordenadas;
- `Limit`: a quantidade de perguntas que serão retornadas pela busca.
- `Tag`: (Obrigatório!) - Palavra-chave a ser utilizada para a realização da busca das perguntas relacionadas a Javascript. Por exemplo ao utilizar a tag `HTML`, trará perguntas com as tags `HTML e Javascript`. Caso queira utilizar mais de uma tag na busca, utilize de `;` para separá-las. Por exemplo, utilizando `HTML;CSS` fará com que seja trazido perguntas com as tags `HTML, CSS e Javascript`.

Ao apertar o botão de busca, o Angular enviará as informações dos parâmetros e as informações desejadas no formato que será interpretado pelo back-end. Ao receber de volta as informações desejadas, elas serão listadas embaixo do formulário de busca.

## Back-end - Graphql API

No back-end será recebido pelo Node.js a query enviada pelo Angular na qual é requisitada pelo GraphQL afim de realizar a busca na API do Stackoverflow. 
Basicamente, o `GraphQL` depende da criação de `schemas` e de `resolvers`. No caso desse projeto:
- O `schema.js` apresenta o formato em que as informações de entrada (parâmetros escolhidos no front-end) e as informações a serem retornadas (dados disponibilizados pela API do stackoverflow).
- Em `resolvers.js` é tratado a url da qual será utilizada para a realização da busca na API através do pacote `node-fetch`. No final, serão retornadas as informações desejadas para o front-end.



