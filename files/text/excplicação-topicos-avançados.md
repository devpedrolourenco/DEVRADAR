# TOPICOS AVANÇADOS ANOTAÇOES

Iniciando-se pelo backend da aplicação adicionando uma lib no backend para funcionar o protocolo **websoket** 

``` $ yarn add socket.io ```

O que e o portocolo websocket: hoje estamos acostumados com requisicoes HTTP que possui (get, post, put, delete) essas requisicoes geralmente elas aprte do frontend pedindo uma informacao que cai pro backend e que ele retorna uma resposta para aplicacao. 

imagine que em algum momento o backend quer enviar uma informacao apra o frontend sem uma requisicao diretamente.

uma maneira de fazer isso e usando o protocolo WebSocket


do lado do mobile instala ```yarn add socket.io-client  ```