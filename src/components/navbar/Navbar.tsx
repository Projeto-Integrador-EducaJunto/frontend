import { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { UserCircle } from '@phosphor-icons/react';
import { toastAlert } from '../../utils/ToastAlerts';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const isHomeRoute = location.pathname === '/home' || location.pathname === '/';
    const navClass = isScrolled || !isHomeRoute ? 'bg-blue-500' : 'bg-transparent';
    const [showDropdown, setShowDropdown] = useState(false);

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

    if (shouldHideNavbar) return null;

    return (
        <nav className={`fixed w-full text-white z-40 ${isScrolled ? 'duration-500 border-b' : ''} ${navClass}`}>
            <div className="container mx-auto flex justify-center items-center py-4">
                <div className={`flex items-center text-white'}`}>
                    <Link to="/home" className="text-white">
                        <img src="https://ik.imagekit.io/0h4imb0ky/img/logoNavbar.svg?updatedAt=1707248099251" className="h-10" />
                    </Link>
                    <ul className="flex items-center ml-20 font-bold">
                        <li className="mr-6 group">
                            <Link to="/home" className="block px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-lg">
                                Home
                            </Link>
                        </li>
                        <li className="mr-6 group">
                            <Link to="/sobre" className="block px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-lg">
                                Sobre nós
                            </Link>
                        </li>
                        <li className="mr-6 group">
                            <Link to="/temas" className="block px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-lg">
                                Temas
                            </Link>
                        </li>
                        <li className="mr-6 group">
                            <Link to="/postagens" className="block px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-lg">
                                Postagens
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="absolute right-10">
                    <button onMouseEnter={() => setShowDropdown(true)} className="p-2">
                        {usuario.token ? (
                            <img src={usuario.foto} alt="Foto do perfil" className="rounded-full w-8 h-8" />
                        ) : (
                            <UserCircle size={32} className="text-white" />
                        )}
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 rounded-md shadow-lg bg-white text-black"
                             onMouseLeave={() => setShowDropdown(false)}>
                            <div className="py-1 w-48">
                                {usuario.token ? (
                                    <>
                                        <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</Link>
                                        <Link to="/cadastrarPostagem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Criar postagem</Link>
                                        {usuario.usuario === "root@root.com" && (
                                        <Link to="/cadastrarTema" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Criar tema</Link>
                                        )}
                                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={logout}>Sair</button>
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
