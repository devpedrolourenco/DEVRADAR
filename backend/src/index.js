const express = require('express'); //chamando o express em uma variavel
const mongoose = require('mongoose'); //chamando a biblioteca que faz integracao entre aplicacao e o banco de dados
const cors = require('cors');
const routes = require('./routes'); //Importando o arquivo routes para dentro do codigo

const app = express(); //express ele e uma funcao


/** e dentro dos paramtros da funcao abaixo e ira colocar entre string a string de conexao do mongo ai deve alterar a senha e o test qe colocar o nome 
 * que voce quer dar ao banco onde irei colocar week10
 */
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ki3vj.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) ; 

app.use(cors())
app.use(express.json());
app.use(routes); //agora toas as rotas estao cadastradas na aplicacao


/***
 *  a aplicacao quando esta em ambiente de desenvolvimento sempre acesso a local host, ou seja sempre podemos escolher a posta que queremos rodar ela
 * 
 */




 app.listen(3333); //aqui voce seleciona a porta 