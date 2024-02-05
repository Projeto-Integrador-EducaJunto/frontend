import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";
import "./CardTemas.css"; 

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className="card-temas">
      <header className="card-header">Tema</header>
      <div className="card-content">
        <p className="content-item">{tema.nome}</p>
        <p className="content-item">{tema.descricao}</p>
      </div>
      <div className="card-actions">
        <Link to={`/editarTema/${tema.id}`} className="edit-link">
          <button className="action-button">Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className="delete-link">
          <button className="action-button">Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
