<<<<<<< HEAD
import Tema from "../../../models/Tema"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"

=======
import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";
import "./CardTemas.css"; 
>>>>>>> 0ad3906c20064d1485cdfe12b4621d3669e9d1a9

interface CardTemasProps {
  tema: Tema;
}



function CardTemas({ tema }: CardTemasProps) {
<<<<<<< HEAD

  let btns: ReactNode

  const { usuario } = useContext(AuthContext)


  if (usuario.usuario == "root@root.com") {
    btns = (
      <>
        <Link to={`/editarTema/${tema.id}`} className="text-slate-100 bg-opacity-90 bg-blue-400  hover:bg-blue-600 w-full flex items-center justify-center py-2">
          <button>Editar</button>
=======
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
>>>>>>> 0ad3906c20064d1485cdfe12b4621d3669e9d1a9
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className="delete-link">
          <button className="action-button">Deletar</button>
        </Link>
      </>

    )
  }

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-gradient-to-b from-blue-500 to-blue-900 text-white font-bold text-2xl">Tema</header>
      <p className="p-8 text-3xl bg-slate-300 h-full">{tema.nome}</p>
      <p className="p-8 text-3xl bg-slate-300 h-full">{tema.descricao}</p>
      <div className="flex">
        {btns}
      </div>
    </div>
  );
}

export default CardTemas;
