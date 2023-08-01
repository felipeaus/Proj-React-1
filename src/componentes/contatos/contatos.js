import "./contatos.css"

export function Contatos(props) {
    return (
  
      <div className="contato">
      <a href={props.nome} target="_blank" rel="noopener noreferrer">
        <img className="img-contato" alt="contatos" src={props.image}></img>
      </a>
     </div>   
    );
  }