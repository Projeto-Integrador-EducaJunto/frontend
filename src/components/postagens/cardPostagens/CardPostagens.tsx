import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  postagem: Postagem
}

function CardPostagem({postagem}: CardPostagemProps) {
  return (
    <div className='border-blue-100 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-gradient-to-b from-blue-500 to-blue-500 text-white py-2 px-4 items-center gap-4">
          <img src={postagem.usuario?.foto} className='h-12 rounded-full ' alt="" />
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
      <Link to={`/editarPostagem/${postagem.id}`} className='w-full text-slate-100 bg-opacity-90 bg-blue-400  hover:bg-blue-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${postagem.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem