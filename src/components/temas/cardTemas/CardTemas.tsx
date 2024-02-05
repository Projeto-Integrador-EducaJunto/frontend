import Tema from "../../../models/Tema"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"
import "./CardTemas.css";

interface CardTemasProps {
  tema: Tema;
}



function CardTemas({ tema }: CardTemasProps) {

  let btns: ReactNode

  const { usuario } = useContext(AuthContext)


  if (usuario.usuario == "root@root.com") {
    btns = (
      <>
        
          <Link to={`/editarTema/${tema.id}`} className="edit-link">
          <button>Editar</button>
          </Link>
       
            <Link to={`/deletarTema/${tema.id}`} className="delete-link">
              <button className="action-button">Deletar</button>
            </Link>
          </>

          )
  }

          return (
            <div className="card-temas">
              <header className="card-header">Tema</header>
              <div className="card-content">
                <p className="content-item">{tema.nome}</p>
                <p className="content-item">{tema.descricao}</p>
              </div>
              <div className="card-actions">
              {btns}
              </div>
            </div>
          );
}

          export default CardTemas;
