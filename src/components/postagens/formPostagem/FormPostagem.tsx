import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Tema from "../../../models/Tema";
import { ToastAlerta } from "../../../utils/ToastAlerts";


function FormPostagem() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({
        id:0,
        descricao:"",
        nome: "",
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        conteudo: "",
        anexo: "",
        data_hora: "",
        estado: 0,	
        tema: null,
        usuario: null,
    })

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O Token Expirou!', "info")
                handleLogout()
            }
        }
    }


    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O Token Expirou!', "info")
                handleLogout()
            }
        }
    }


    async function buscarTemas() {
        try {
            await buscar(`/temas`, setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O Token Expirou!', "info")
                handleLogout()
            }
        }
    }

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        buscarTemas();
        if (id !== undefined) {
            buscarPostagemPorId(id);
            console.log(tema);

        }
    }, [id]);

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema:tema,
        })
    },[tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema:tema,
            usuario:usuario,
        })
    }

    function retornar() {
        navigate("/postagens")
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta('Postagem foi atualizado com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O Token Expirou!', "info")
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar o Postagem.', "erro")
                }

            }
        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta('Postagem foi cadastrado com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O Token Expirou!', "info")
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar o Postagem.', "erro")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === ""

    return (
        <div className="container flex flex-col items-center justify-center w-7/12 mx-auto p-16 h-76 gap-4
         bg-blue-500 bg-opacity-45 text-black rounded-lg">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Postagem' : 'Editar Postagem'}
            </h1>

            <form className="" onSubmit={gerarNovaPostagem}>

                
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="descricao">Conteúdo da Postagem</label>
                    <input
                        type="text"
                        placeholder="Escreva o conteúdo da sua postagem"
                        name='conteudo'
                        className="border-2 border-slate-700 rounded p-2 drop-shadow-md"
                        value={postagem.conteudo}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Anexo da Postagem</label>
                    <input
                        type="text"
                        placeholder= "Insira o anexo da sua postagem"
                        name='anexo'
                        className="border-2 border-slate-700 rounded p-2 drop-shadow-md"
                        value={postagem.anexo}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Tema da postagem</p>
                    <select name="tema" id="tema" className='border-2 p-2 border-slate-800 rounded drop-shadow-md' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione um tema</option>
                        {temas.map((tema) => (
                            <>
                                <option value={tema.id} >{tema.nome}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                disabled={carregandoTema}
                    className="rounded text-white text-lg  h-12 bg-orange-300 w-full mt-5 
                               hover:bg-blue-500 py-3 mx-auto flex justify-center drop-shadow-md"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}</span>

                    }

                </button>
            </form>
        </div>
    );
}

export default FormPostagem;