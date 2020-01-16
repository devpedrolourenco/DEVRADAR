/***
 * 
 * Aqui onde ficara as rotas da aplicacao que antes estava sendo criado no index
 * 
 * o jeito mais simples de separar essas rotas e importando o modulo de roteamento do proprio express, quando eu quero apenas importar alguma coisa 
 * 
 * eu faco entre chaves const {} = require('express');
 */

const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router(); //vou declarar uma variavel que recebe a funcao router 

routes.get('/devs', DevController.index); //buscar os devs de dentro do nosso banco de dados lembrando que a rota pode ser a mesma se o metodo for diferente
routes.post('/devs', DevController.store); //cadastrasr os devs

routes.get('/search', SearchController.index);

//agora para exportar as rotas iremos fazer assim:

module.exports = routes;