/**
 * Na nossa aplciacao temos a entidade Dev onde iremos cadastrar no banco de dados
 */

 const mongoose = require('mongoose'); //importar o mongoose porque temos que informar o foramto  que ira receber no bando dedados


 /** 
  * Comecamos criando uma variavel chamada devSchema Schema e a estuturacao de uma entidade dentro do banco de dados
  * e ali voce vai passar os parametros de dado que aquela entidade ira ter
  */

  const DevSchema = new mongoose.Schema({
      name: String,
      github_username: String,
      bio: String,
      avatar_url: String,
      techs: [String], //como sao mais de uma tecnologia iremos fazer um array ou seja um vetor de strings

      

  });

  module.exports = mongoose.model('Dev', DevSchema); //na hora de exportar eu coloco dev que sera como sera noemado no bando de dados e shcema que e o esqeuca