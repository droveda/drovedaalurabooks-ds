# Commands
* baixar projeto base: https://github.com/alura-cursos/alurabooks-ds/tree/aula-1
* yarn install
* yarn storybook

## utilizando o https://tsdx.io/#quick-start
* npx tsdx create mylib
  * selecionar template: react-with-storybook
    * porem nao funcionou


## Para testar o componente
* na raiz do projeto, 
  * yarn build
  * cd example
    * yarn install
    * yarn build
    * yarn
    * yarn start

## Criar conta no npmjs.com
* colocar projeto no github
* no terminal: npm login

## Publicar o pacote
* npm publish --access-public

## Publicar o pacote apos atualizar o projeto
* alterar a versao da lib no package.json
* npm publish --access-public