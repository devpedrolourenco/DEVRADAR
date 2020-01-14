# semana-omniStack-10
 semana ommniStack-10  #rocketseat

 Projeto criado na Semana Omnistack 10 pelo pessoal da rocketseat 
 
 [Site da Rocketseat](https://rocketseat.com.br/)
 [Canal do Youtube Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg)


## CONFIGURAÇÃO DO AMBIENTE E SOFTWARES NECESSÁRIOS (No Windowns)! 

### 1 . Instalação do Node JS.

[Site NodeJS](https://nodejs.org/en/)


Recomenda-se que se instala a versão LTS que é a de suporte a longo prazo. 

![home Node](img/smo-01.png)


> É recomendado que se instale o node atraves dos gerenciadores de pacote pois assim facilita a ataulização mudanças e versão e etc!

Para conseguirmos instalar por gerenciador de pacotes iremos clicar em Dowloads e no canto inferior clicar em **Installing Node.js via Package Manager**

![Download Node](img/smo-02.png)

[Intalling package manager](https://nodejs.org/en/download/package-manager/)


![pkg mananger](img/smo-03.png)


Primeiro devemos instalar o Chocolato no caso do Windowns que é um gerenciador de pacotes via powershell:

[Download choco](https://chocolatey.org/install)

![Download choco](img/smo-06.png)

Após instalar o gerenciador de pacores volta no site do Node e executa o comando via terminal de instalação

![Codigo Node.js](img/smo-05.png)

E ai ele sera intalado no powerShell

![Powershell](img/smo-04.png)

>lembrando que para instalar a versão LTS voce deve executar no Powerselll o seguinte comando:

``` choco install nodejs-lts  ```

**Caso voce tenha instalado sem querer a versao current pode remover ela com o seguinte comando antes de instalar a versao lts** 

``` choco unistall nodejs -y --remove-dependencies   ```



## 2 . Instalação do Yarn**

Melhor instalador de pacotes do node e o YARN e e recomendado a instalacao dele pois ele e mais rapido que o NPM

[Download Yarn](https://yarnpkg.com/lang/en/)

**Instalar via Chocolatey**

Chocolatey é um gerenciador de pacotes para Windows. Você pode instalar o Chocolatey seguindo estas instruções .

Depois de instalar o Chocolatey explicado la em cima , você pode instalar o fio executando o seguinte código no console:

```  choco install yarn ```


## Back-end

O que é o back-end da aplicação: 

O back-end é aquela parte do código que o usuário não enxerga é onde ficam:

- Regras de Negócios;
- Conexão Banco de Dados;
- Envio de e-mail;
- Comunicação com webservices;
- Autenticação do usuário;
- Criptografia e segurança; 


A **API Restfull** quer dizer que ela segue uns padrões, são padrões de metodos, tipos de parametros e etc. 

Quando se tem o backend feito com node precisamos de algo para interpretar com o fontend, 

![Estrutura](img/smo-07.png)

E é usado o JSON que é a linguagem (ela nao e bem uma linguagem ela e uma estrutura de dados) que faz essa ponte entre o back e o front
a notação dele é JavaScriot Of Notation. 

Dentro da pasta do Backend através do powershell voce executa o sequinte comando:

``` yarn init -y  ```

para ele nao realizar perguntas sobre o projeto que nao sao importantes no momento

![Estrutura](img/smo-08.png)


