
import Tema from "../../../models/Tema"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { Link } from "react-router-dom"


interface CardTemasProps {
  tema: Tema
}



function CardTemas({ tema }: CardTemasProps) {


  let btns: ReactNode

  const { usuario } = useContext(AuthContext)


  if (usuario.usuario == "root@root.com") {
    btns = (
      <>

        <Link to={`/editarTema/${tema.id}`} className="text-slate-100 bg-opacity-90 bg-blue-400  hover:bg-blue-600 w-full flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>

        <Link to={`/deletarTema/${tema.id}`} className="text-slate-100 bg-opacity-90  bg-red-400 hover:bg-red-600 w-full flex items-center justify-center">
          <button className="action-button">Deletar</button>
        </Link>
      </>

    )
  }

  return (
    <div className="border flex flex-col rounded-md overflow-hidden justify-between">
      <header className="py-2 px-6 bg-gradient-to-b from-blue-500 to-blue-500 text-white font-bold text-2xl">{tema.nome}</header>
      <p className="p-8 text-2xl bg-slate-100 text-bold h-full">Descrição: {tema.descricao}</p>
      <div className="flex">
     
        {btns}
      </div>
    </div>
  );
}

export default CardTemas
