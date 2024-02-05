import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import './CardPostagens.css'; 

interface CardPostagemProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagemProps) {
  return (
    <div className='card-postagem'>
      <div className='header'>
        <div className="user-info">
          <img src={postagem.usuario?.foto} className='user-avatar' alt="" />
          <h3 className='user-name'>{postagem.usuario?.nome}</h3>
        </div>
      </div>
      <div className='content'>
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
      <div className="actions">
        <Link to={`/editarPostagem/${postagem.id}`} className='edit-link'>
          <button className='action-button'>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${postagem.id}`} className='delete-link'>
          <button className='action-button'>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
