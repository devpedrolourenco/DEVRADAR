/***
 * 
 * ele e responsavel por receber a requisicao e ativar o que ele precisa fzer assim que for chamado
 */
const axios = require('axios'); //chamando o axios p
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')






 module.exports = {
    
    async index(request, response) { //nesse caso no insmina vai um metodo get modo mody
        const devs = await Dev.find();

        return response.json(devs); 

    },




     
    async store (request, response) {
    const { github_username, techs, latitude, longitude } = request.body;  // elas sao jogadas aqui as techs porque vem do corpo da requisicao

    /**
     * Evitar que um dev seja cadastrado duplicado
     */
    let dev = await Dev.findOne({ github_username}) 
    
    if (!dev) {

         //quando se usa crase conseguimos colocar variaveis dentro da string chamado tamplatestrings para coloar usa ${}
         const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //api pode demorar a responder iremos usar o async quer sizer que ela pode demoarar a responder e antes da chamada coloca o awayt
    
         //fazendo a desistruturacao para pegar apenas o que queremos da api que vimos apos cfazer o console.log da aplicacao
         const { name = login, avatar_url, bio } = apiResponse.data; 
  
         // console.log(name, avatar_url, bio, github_username);

         const techsArray = parseStringAsArray(techs);

        //atentes de gravar precisamos trabalhar nos dados de logitude e latitude
        const location = {
             type: 'Point',
            coordinates: [longitude, latitude],
         };

         //para evniar pro Dev.js para ele enviar para o banco
        dev = await Dev.create({
             github_username, //nesse caso so coloca o nome poiis a variavel e identica ao dado colhido isso chama short sintaxe
             name,
             avatar_url,
             bio,
             techs: techsArray,
             location,

        });

    }



  
   

   return response.json(dev); 


 }

};