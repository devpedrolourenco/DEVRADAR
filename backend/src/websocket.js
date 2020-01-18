const socketio = require('socket.io');
const parseStringAsArray  = require ('./utils/parseStringAsArray') 
const calculateDistance  = require('./utils/calculateDistance')

let io;
const connections = []; //salvar as conecoes na memoria ja que estamos em um banco de testes sendo que seria mais viavel isso ser ligado a um servidor

exports.setupWebscoket =(server) =>{
    io = socketio(server);

    //toda vez que o usuario conectar na aplicacao atraves do protocolo websocker eu vou recber um objeto chamado soket
    io.on('connection', socket => {
        console.log(socket.id);
        const {latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),

        });

        
    }); 

};

exports.findConnections = (coordinates, techs ) => {
    return connections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 10
         && connection.techs.some(item => techs.includes(item))

    });
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);

    })
}