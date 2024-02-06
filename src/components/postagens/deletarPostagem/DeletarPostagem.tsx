import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar, deletar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerts';

import './DeletarPostagem.css'; 

function DeletarPostagem() {
    const [Postagem, setPostagem] = useState<Postagem>({} as Postagem)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

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
            ToastAlerta('Você precisa estar logado', "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

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

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center p-32'>Deletar Postagem</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o Postagem a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-blue-500 text-white font-bold text-2xl'>Postagem {Postagem.id}</header>
                <p className='p-8 text-3xl bg-slate-200 h-full text-black'>{Postagem.conteudo}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{Postagem.anexo}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-blue-400 hover:bg-blue-600 flex items-center justify-center' onClick={deletarPostagem}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem