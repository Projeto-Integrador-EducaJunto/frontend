import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar, deletar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerts';

import './DeletarPostagem.css'; 

function DeletarPostagem() {
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagems/${id}`, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate('/postagems');
  }

  async function deletarPostagem() {
    try {
      await deletar(`/postagems/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta('Postagem apagada com sucesso', 'sucesso');
    } catch (error) {
      ToastAlerta('Erro ao apagar a Postagem', 'erro');
    }

    retornar();
  }

  return (
    <div className='deletar-postagem-container'>
      <h1 className='text-4xl text-center my-4'>Deletar Postagem</h1>

      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar a seguinte Postagem?
      </p>

      <div className='postagem-card'>
        <header className='card-header'>Postagem</header>
        <div className='card-content'>
          <p className='content-item'>{postagem.conteudo}</p>
          <p className='content-item'>{postagem.anexo}</p>
        </div>
        <div className='card-actions'>
          <button className='action-button no' onClick={retornar}>
            Não
          </button>
          <button
            className='action-button yes'
            onClick={deletarPostagem}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
