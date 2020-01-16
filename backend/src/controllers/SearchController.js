/***
 * 
 * aqui e para listar os devs na aplicacao mobile, ou seja e poderiamos ter criado no devcontroller porem como ja temos um index la existe uma regra de limitacoes 
 * do index dentro de cada controler
 * 
 */

 const Dev = require('../models/Dev');
 const parseStringAsArray = require('../utils/parseStringAsArray')

 module.exports = {
     async index(request, response){
         console.log(request.query)
         //buscar todos os devs num raio de 10km
         // Filtrar por tecnologias

         const { latitude, longitude, techs} = request.query;

         const techsArray = parseStringAsArray(techs); //aqui to chamando o util que serve tanto aqui quanto no dev controler

         const devs = await Dev.find({
             //um dos filtros e techs ai o in quer dizer eu quero achar se usuario que trabalha com tecnologias de...
             techs: {
                 $in: techsArray, //esse in e um operador logico do mongo podemos achar os operadores do mongoDV
             },
             location: {
                 // near conseguimos encontrar objetos pertos de uma localizacao
                 $near: {
                     $geometry: {
                         type: 'Point',
                         coordinates: [longitude, latitude]
                     },
                     $maxDistance: 10000, //aqui qual a distancia do raio passmos em metros ou seja 10000 mil metros (10km)

                 },
             }

         });
         console.log(techsArray)
        response.json({ devs});
     }
 }

 /**
  * Vamos comemecar pelo insomnia criando um parametro buscar devs do tipo get
  */