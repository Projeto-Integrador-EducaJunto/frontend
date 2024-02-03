import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'

export interface CardPostagemProps {
  postagem: Postagem
}


function CardPostagem({ postagem }: CardPostagemProps) {

  let userTrue = ""

  const { usuario } = useContext(AuthContext)

  const user = usuario.usuario

  let post = postagem.usuario

  let userPost: string | null | undefined = null

  userPost = post?.usuario


  if (user === userPost) {
    userTrue = "true"
  }
  else {
    userTrue = ""

  }


  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-blue-400 py-2 px-4 items-center gap-4">
          <img src={postagem.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{postagem.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>Postagem {postagem.id}</h4>
          <p>{postagem.conteudo}</p>
          <p>Anexo: {postagem.anexo}</p>
          <p>Tema: {postagem.tema?.nome}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
            timeZone: 'America/Sao_Paulo'
          }).format(new Date(postagem.data_hora))}</p>
        </div>
      </div>
      <div className="flex">
        {userTrue === "true" ? (<Link to={`/editarPostagem/${postagem.id}`} className='w-full text-white bg-blue-400 hover:bg-blue-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>) : (<div className='w-full text-white bg-blue-400 flex items-center justify-center py-2'>
        </div>)}
        {userTrue == "true" ? (<Link to={`/deletarPostagem/${postagem.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>) : (<div className='w-full text-white bg-blue-400 flex items-center justify-center py-2'>
        </div>)}
      </div>
    </div>
  )
}

export default CardPostagem