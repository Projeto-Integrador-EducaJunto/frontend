import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar, deletar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerts';
import './DeletarTema.css'; 

function DeletarTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
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
    navigate('/temas');
  }

  async function deletarTema() {
    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta('Tema apagado com sucesso', 'sucesso');
    } catch (error) {
      ToastAlerta('Erro ao apagar o Tema', 'erro');
    }

    retornar();
  }

  return (
    <div className='deletar-tema-container'>
      <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>

      <div className='tema-card'>
        <header className='card-header'>Tema</header>
        <div className='card-content'>
          <p className='content-item'>{tema.nome}</p>
          <p className='content-item'>{tema.descricao}</p>
        </div>
        <div className='card-actions'>
          <button className='action-button no' onClick={retornar}>
            Não
          </button>
          <button className='action-button yes' onClick={deletarTema}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
