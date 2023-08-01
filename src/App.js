import './App.css';
import { Servicos } from "./componentes/servicos/servicos";
import { Portfolio } from './componentes/portfolio/portfolio';
import { Contatos } from "./componentes/contatos/contatos";
import Foto from "./img/foto sem fundo.png";
import Life from "./img/life-hacking.png";
import Opiniao from "./img/opiniao-distorcida.png";
import Thunder from "./img/thunder-cast.png";
import Whats from "./img/whats-icon.png";
import Insta from "./img/insta-icon.png";
import Twitter from "./img/twitter-icon.png";

function App() {
  return (
  <>
  <div className="all-content">

   <div className='foto'>
      <div>
        <img alt="fotodoperfil" className="fotoperfil"
        src={Foto}></img>
      </div>
   </div>
   
   <div className='servicos'>

    <h1>Oi, sou Felipe, editor de podcast.</h1>
    <h2>Quero oferecer meus serviços para você:</h2>      
    <div className="serv-desc">
    <Servicos  titulo="Edição de podcast"
                    desc="Tenha seu episódio fluido,
                    sem pausas, ofereça o melhor
                    para sua audiência."/>
    <Servicos  titulo="Criação de vinheta"
                    desc="Ta sem idéia para abertura
                    ou o encerramento, te ajudo
                    a criar uma vinheta"/>
    <Servicos  titulo="Trilhas sem copyright"
                    desc="Todas as músicas usadas são
                    livres de copyright.
                    Você pode usar em todas as 
                    plataformas sem problemas."/>
    <Servicos  titulo="Ótimo tempo de entrega"
                    desc="Edição feita em tempo hábil,
                    você terá tempo para revisar
                    e não perder seu prazo para publicação."/>                                              
   </div>

   </div>  

   <div className='portfolio'> 
        <h1>Trabalhos</h1>   
        <Portfolio className="port-img"
        nome="https://open.spotify.com/show/0NfxJ4y8izQLAwGKMUEFSo?si=8567b4862a26416a" image={Life}/>
        <Portfolio className="port-img"
        nome="https://open.spotify.com/show/3XOH73uUlGHBzQmqbdcHrN?si=9f6025f730c5421e" image={Opiniao}/>
        <Portfolio className="port-img"
        nome="https://open.spotify.com/show/1mLywlXUXW0nDLfh2WaFjb?si=675ba65136d3426a" image={Thunder}/>  
    </div> 
   </div>     
   
   <div className="cont">
    <Contatos nome="https://www.instagram.com/felipedaugusto" image={Insta}/>
    <Contatos nome="http://wa.me/5519971178559" image={Whats}/>
    <Contatos nome="https://twitter.com/FelipeDaugusto" image={Twitter}/>
   </div>
   </>
          
  );
}

export default App;