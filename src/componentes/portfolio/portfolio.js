import './portfolio.css'

export function Portfolio(props) {
    return (
  
      <div className="link-port">
      <a href={props.nome} target="_blank" rel="noopener noreferrer">
        <img className="img-port" alt="fotoportfolio" src={props.image}></img>
      </a>
     </div>   
    );
  }