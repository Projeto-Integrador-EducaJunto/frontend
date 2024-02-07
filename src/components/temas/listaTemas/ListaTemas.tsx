import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import CardTemas from "../cardTemas/CardTemas";
import { DNA } from "react-loader-spinner";

import { toastAlert } from "../../../utils/ToastAlerts";


function ListaTemas() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert("O token expirou!", "erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert("Você precisa estar autenticado!", "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    return (
        <>
            {temas.length === 0 && (
                <div className="flex justify-center items-center h-screen">
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper mx-auto"
                    />
                </div>
            )}
            <div className="flex justify-center w-full py-32">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                        <>
                            {temas.map((tema) => (
                                <>
                                    <CardTemas key={tema.id} tema={tema} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 my-5'>
                <div></div>
                <div className='m-2'>
                    <Link to="/buscarTemaNome" className='w-full rounded-xl text-slate-100 bg-opacity-90 bg-blue-400  hover:bg-blue-600 flex items-center justify-center py-2'>
                        <button className='action-button '>Buscar Temas Por Nomes</button>
                    </Link>
                </div>
                <div className='m-2'>
                    <Link to="/buscarTemaDescricao" className='w-full rounded-xl text-slate-100 bg-opacity-90 bg-blue-400  hover:bg-blue-600 flex items-center justify-center py-2'>
                        <button className='action-button '>Buscar Temas Por Descricao</button>
                    </Link>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default ListaTemas;