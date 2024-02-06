import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { toastAlert } from "../../../utils/ToastAlerts";


function FormTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert("O token expirou!", "info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert("Você precisa estar autenticado!", "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                toastAlert("O tema foi atualizado com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlert("O token expirou!", "info")
                    handleLogout();
                } else {
                    toastAlert("Erro ao atualizar o tema.", "erro")
                }

            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                toastAlert("O tema foi cadastrado com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlert("O token expirou!", "erro")
                    handleLogout();
                } else {
                    toastAlert("Erro ao cadastrar o tema.", "erro")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        
        <div style={{ backgroundImage: `url('https://pub-static.fotor.com/assets/bg/bf9a415f-b758-4c0d-a820-334370772ec3.jpg')` }}>
        <div   className=" w-screen h-screen object-cover container flex flex-col items-center justify-center mx-auto py-32">
            <h1 className="  flex items-center justify-center  font-bold text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
            </h1>

            <form className="  w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                <div className=" flex flex-col gap-2">
                    <label  className = " font-bold "htmlFor="nome">Nome do Tema</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name='nome'
                        className=" border-2 border-slate-700 rounded p-2"
                        required
                        value={tema.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="  flex flex-col gap-2">
                    <label className = " font-bold " htmlFor="descricao">Descrição do Tema</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        required
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    className=" rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }

                </button>
            </form>
        </div>
        </div>
        
    );
    
}

export default FormTema;