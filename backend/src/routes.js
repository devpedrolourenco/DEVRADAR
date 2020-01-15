/***
 * 
 * Aqui onde ficara as rotas da aplicacao que antes estava sendo criado no index
 * 
 * o jeito mais simples de separar essas rotas e importando o modulo de roteamento do proprio express, quando eu quero apenas importar alguma coisa 
 * 
 * eu faco entre chaves const {} = require('express');
 */

 const { Router } = require('express');

 const routes = Router(); //vou declarar uma variavel que recebe a funcao router 



 

 routes.get('/', (request, response) => {
    return response.json({ message: ' Hello Worlsssd'}); 

}); //aqui vai definir a rota e podemos imputar uma arrow function 


//agora para exportar as rotas iremos fazer assim:

module.exports = routes;