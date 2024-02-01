// NavbarWithDropdown.jsx

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

function NavbarWithDropdown() {
    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);

    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className={`fixed w-full text-white z-40 ${isScrolled ? 'duration-500 bg-blue-500 border-b' : ''}`}>
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
                    </ul>
                </div>
                <button className={` bg-orange-500 text-white font-bold rounded-full py-2 px-8 hover:scale-125 duration-500 ml-5 z-50`}>
                    Doe
                </button>
            </div>
        </nav>
    );
}

export default NavbarWithDropdown;
