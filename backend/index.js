const express = require('express'); //chamando o express em uma variavel

const app = express(); //express ele e uma funcao


/***
 *  a aplicacao quando esta em ambiente de desenvolvimento sempre acesso a local host, ou seja sempre podemos escolher a posta que queremos rodar ela
 * 
 */





 app.get('/', (request, response) => {


 }); //aqui vai definir a rota e podemos imputar uma arrow function 

/**
 * Essa funcao acima recebe dois parametros que sao imbutidos de uma forma totalmente automatica pelo express
 * 
 * esses dois paramentros sao sempre fixos que sao: 
 * 
 * req  ---- que irei nomear como request (que representa a requisicao)
 * 
 * res ------ que irei nomear como response (que representa a resposta)
 * 
 * Explicando a sitaxe acima: 
 * 
 * O que sao esses dois parametros, quando eu acesso uma rota estou fazendo uma requisicao e ela pode conter informacoes, e o response e como iremos retornar uma resposta para meu 
 * cliente
 * 
 */






 app.listen(3333); //aqui voce seleciona a porta 