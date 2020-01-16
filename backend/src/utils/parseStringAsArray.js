module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map( techs => techs.trim()); //aqui estou tranformadno a string em arrei cortando ela toda vez que tiver umaa virgula e depois farei um trim apra tirar os espacos do final e inicio


}