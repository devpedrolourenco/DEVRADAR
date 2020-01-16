import React, {useState , useEffect} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');



  useEffect(() => {
    navigator.geolocation.getCurrentPosition( 
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

        console.log (position)

      }, 
      (err) => {
        console.log (err)
      },
      {
        timeout: 30000,
      }
      )
  }, []);

  //criar uma funcao que ira disparar toda vez que o usuario der submir

  async function handleAddDev (e){
    e.preventDefaul();

  }
  
  return (
   <div id="app">
     <aside>
       <strong>Cadastrar</strong> 

       <form onSubmit={handleAddDev}>

         <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input

            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={ e => setGithubUsername(e.target.value)}
            />
         </div>
        
         <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
             name="techs"
              id="techs" 
              required 
              value={techs}
              onChange={ e => setTechs(e.target.value)}
              />
         </div>

        <div className="input-group">

            <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required value={latitude} 
                onChange={e => setLatitude(e.target.value)}
                />
            </div>
            
            <div className="input-block">
                <label htmlFor="longitude">Longitudes</label>
                <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required value={longitude}
                onChange={e => setLongitude(e.target.value)}
                 />
            </div>
           </div>
           <button type="submit" >Salvar</button>

        
      
       </form>
     </aside>
     <main>
       <ul>
         <li className="dev-item">
           <header>
             <img src="https://avatars0.githubusercontent.com/u/55964391?s=460&v=4" alt="Pedro Lourenco"/>
             <div className="user-info">
               <strong>Pedro Lourenco</strong>
               <span>React, ReactJS, Pyhon</span>
             </div>
           </header>
           <p>Mestre dos magos</p>
           <a href="https://github.com/devpedrolourenco">Acessar perfil no github</a>
         </li>

         <li className="dev-item">
           <header>
             <img src="https://avatars0.githubusercontent.com/u/55964391?s=460&v=4" alt="Pedro Lourenco"/>
             <div className="user-info">
               <strong>Pedro Lourenco</strong>
               <span>React, ReactJS, Pyhon</span>
             </div>
           </header>
           <p>Mestre dos magos</p>
           <a href="https://github.com/devpedrolourenco">Acessar perfil no github</a>
         </li>

         <li className="dev-item">
           <header>
             <img src="https://avatars0.githubusercontent.com/u/55964391?s=460&v=4" alt="Pedro Lourenco"/>
             <div className="user-info">
               <strong>Pedro Lourenco</strong>
               <span>React, ReactJS, Pyhon</span>
             </div>
           </header>
           <p>Mestre dos magos</p>
           <a href="https://github.com/devpedrolourenco">Acessar perfil no github</a>
         </li>

         <li className="dev-item">
           <header>
             <img src="https://avatars0.githubusercontent.com/u/55964391?s=460&v=4" alt="Pedro Lourenco"/>
             <div className="user-info">
               <strong>Pedro Lourenco</strong>
               <span>React, ReactJS, Pyhon</span>
             </div>
           </header>
           <p>Mestre dos magos</p>
           <a href="https://github.com/devpedrolourenco">Acessar perfil no github</a>
         </li>




       </ul>



     </main>
    
   </div>
  );
}

export default App;

//Se formos colocar umaa classe em um elemnto do react usaos className