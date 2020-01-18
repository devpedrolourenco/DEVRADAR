import React from 'react';
import {StatusBar} from 'react-native' //como quero que todas as paginas alterem a satatus bar 

import Routes from './src/routes'



export default function App() {
  return (
    //Nao podemos ter um componente embaixo do outro sem ter um container por forma entao usamos as tags vazias para isso <> </> que se chama fragment
   <> 
    <StatusBar barStyle="light-content" backgroundColor="#7d4e7"/>
    <Routes/>
   </>
  );
}

/**
 * Lembrando que la em cima na status bar eu coloquei que seria barnco e coloquei a mesma cor do container texto topo
 * da aplicacao pois no android ele nao fica colorido automaticamente como no IOS 
 */