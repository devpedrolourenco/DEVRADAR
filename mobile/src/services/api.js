import axios from 'axios';


const api = axios.create ({
    baseURL: 'http://192.168.0.103:3333', //essa base url ela muda um pouco de acordo com o ambiente que voce esta e usando se voce estiver usando no dispositivo fisico usa o ip la do expo
})


export default api;