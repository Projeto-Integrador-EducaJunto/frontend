import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'
import "./CardPostagens.css"

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
    <div className='card-postagem my-5 border border-slate-400'>
      <div className='header'>
        <div className="user-info">
          <img src={postagem.usuario?.foto} className='user-avatar' alt="" />
          <h3 className='user-name'>{postagem.usuario?.nome}</h3>
        </div>
      </div>
      <div className='content '>
        <h4 className='post-title'>Postagem {postagem.id}</h4>
        <p>{postagem.conteudo}</p>
        <p>Anexo: {postagem.anexo}</p>
        <p>Tema: {postagem.tema?.nome}</p>
        <p>Data: {new Intl.DateTimeFormat(undefined, {
          dateStyle: 'full',
          timeStyle: 'medium',
          timeZone: 'America/Sao_Paulo'
        }).format(new Date(postagem.data_hora))}</p>
      </div>
      <div className="flex actions">
        {userTrue === "true" ? (<Link to={`/editarPostagem/${postagem.id}`} className='edit-link '>
          <button className='action-button'>Editar</button>
        </Link>) : (<div className=''>
        </div>)}
        {userTrue == "true" ? (<Link to={`/deletarPostagem/${postagem.id}`} className='edit-link'>
          <button className='action-button'>Deletar</button>
        </Link>) : (<div className=''>
        </div>)}
      </div>
    </div>
  );
}

export default CardPostagem;
