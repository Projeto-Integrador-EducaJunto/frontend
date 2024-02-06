import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, ReactNode } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import { ToastAlert } from "../../../utils/ToastAlert";
import CardPostagens from "../cardPostagens/CardPostagens";




function ListaPostagensUser() {

    const navigate = useNavigate();

    let card: ReactNode

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlert('O token expirou, favor logar novamente', "erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado', "")
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    {
        card = (
            <>
                {
                    postagens.map((postagem) => (
                        postagem.usuario?.id == usuario.id ?
                            (<CardPostagens key={postagem.id} postagem={postagem} />) :
                            "")
                    )
                }

            </>

        )
    }

    return (
        <>
            {postagens.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div >
                {card}
            </div>
        </>
    );
}

export default ListaPostagensUser;
