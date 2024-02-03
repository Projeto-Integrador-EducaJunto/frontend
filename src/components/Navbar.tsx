// NavbarWithDropdown.jsx

import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

function NavbarWithDropdown() {
    const navigate = useNavigate();
    const location = useLocation();
    const { handleLogout } = useContext(AuthContext);

    const [isScrolled, setIsScrolled] = useState(false);

    const isHomeRoute = location.pathname === '/home';
    const navClass = isScrolled || !isHomeRoute ? 'bg-blue-500' : 'bg-transparent';

    function logout() {
        handleLogout();
        alert("O usuário foi desconectado com sucesso!");
        navigate("/login");
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full text-white z-40 ${isScrolled ? 'duration-500 border-b' : ''} ${navClass}`}>
            <div className="container mx-auto flex justify-center items-center py-4">
                <div className={`flex items-center text-white'}`}>
                    <Link to="/home" className="text-white">
                        <img src="src\assets\img\logoNavbar.svg" className="h-10" />
                    </Link>
                    <ul className="flex items-center ml-20 font-bold">
                        <li className="mr-6">
                            <Link to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/sobre">
                                Sobre nós
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/cadastro">
                                Faça parte
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/sobre">
                                Blog
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/temas">
                                Temas
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/cadastrarTema">
                                Cadastrar Tema
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/postagens">
                                Postagens
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/cadastrarPostagem">
                                Cadastrar Postagem
                            </Link>
                        </li>
                        <li className="mr-6">
                            <button onClick={logout}>sair</button>
                        </li>
                    </ul>
                </div>
                {/* <button className={` bg-orange-500 text-white font-bold rounded-full py-2 px-8 hover:scale-125 duration-500 ml-5 z-50`}>
                    Doe
                </button> */}
            </div>
        </nav>
    );
}

export default NavbarWithDropdown;
