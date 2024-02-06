import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { UserCircle } from '@phosphor-icons/react';
import { toastAlert } from '../utils/ToastAlerts';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const isHomeRoute = location.pathname === '/home' || location.pathname === '/';
    const navClass = isScrolled || !isHomeRoute ? 'bg-blue-500' : 'bg-transparent';
    const dropdownRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const shouldHideNavbar = location.pathname === '/login' || location.pathname === '/cadastro';

    function logout() {
        handleLogout();
        toastAlert("O usuário foi desconectado com sucesso!", "sucesso");
        navigate("/login");
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (shouldHideNavbar) return null;
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
                            <Link to="/temas">
                                Temas
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/postagens">
                                Postagens
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className={` bg-orange-500 text-white font-bold rounded-full py-2 px-8 hover:scale-125 duration-500 ml-5 z-50`}>
                    Doe
                </button>
                <div className="absolute right-16 top-1/2-translate-y-1/2">
                    <button onClick={toggleDropdown} className="p-2">
                        {usuario.token ? (
                            <img src={usuario.foto} alt="Foto do perfil" className="rounded-full w-8 h-8" />
                        ) : (
                            <UserCircle size={32} className="rounded-full w-32" />
                        )}
                    </button>
                    {showDropdown && (
                        <div className="absolute right-1 rounded-md shadow-lg bg-white" ref={dropdownRef}>
                            <div className="py-1 w-32">
                                {usuario.token ? (
                                    <>
                                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</div>
                                        <Link to="/configuracoes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configurações</Link>
                                        {usuario.usuario === 'root@root.com' && (
                                            <Link to="/cadastrarTema" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Criar tema</Link>
                                        )}
                                        <Link to="/cadastrarPostagem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Criar postagem</Link>
                                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={logout}>Sair</div>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                                        <Link to="/cadastro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cadastrar</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
