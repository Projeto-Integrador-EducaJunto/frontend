import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardPostagemProps {
  postagem: Postagem;
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
    <div className='border-blue-100 border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-gradient-to-b from-blue-500 to-blue-500 text-white py-2 px-4 items-center gap-4">
          <img src={postagem.usuario?.foto} className='h-12 rounded-full ' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{postagem.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <p className=' text-blue-400 font-bold text-3xl'>{postagem.tema?.nome}</p>
          <p className=' text-orange-400 font-bold my-4'>{postagem.tema?.descricao}</p>
          <hr className="border-slate-400 w-full" />
          <p >{postagem.conteudo}</p>
          <p className='font-bold underline my-4 '>Anexo: <a href={postagem.anexo} target="_blank">{postagem.anexo}</a></p>
          <hr className="border-slate-400 w-full" />
          <p >Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
            timeZone: 'America/Sao_Paulo'
          }).format(new Date(postagem.data_hora))}</p>
        </div>
      </div>
      <div className="flex">
        {userTrue === "true" ? (<Link to={`/editarPostagem/${postagem.id}`} className='w-full text-slate-100 bg-opacity-90 bg-blue-400  hover:bg-blue-600 flex items-center justify-center py-2'>
          <button className='action-button'>Editar</button>
        </Link>) : (<div className=''></div>)}
        {userTrue === "true" ? (<Link to={`/deletarPostagem/${postagem.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button className='action-button'>Deletar</button>
        </Link>) : (<div className=''></div>)}
      </div>
    </div>
  )
}

export default CardPostagem