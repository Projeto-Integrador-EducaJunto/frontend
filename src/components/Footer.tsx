import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-blue-500">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-row py-6">
                    <div className="flex-1 mb-6 text-white mr-20">
                        <Link to="/home" className="text-white">
                            <img src="src\assets\img\logoNavbar.svg" className="h-10" />
                        </Link>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-white md:mb-6 font-bold">Links</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">FAQ</a>
                            </li>
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Ajuda</a>
                            </li>
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Suporte</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-white md:mb-6" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Termos</a>
                            </li>
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Privacidade</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-white md:mb-6" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 block mr-2 ">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Facebook</a>
                            </li>
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Linkedin</a>
                            </li>
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-white md:mb-6" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>Institucional</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Blog Oficial</a>
                            </li>
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Sobre Nós</a>
                            </li>
                            <li className="mt-2 block mr-2">
                                <a href="#" className="no-underline hover:underline text-gray-300 hover:text-white">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
