import { Link } from "react-router-dom";

function Footer() {

    const shouldHideNavbar = location.pathname === '/login' || location.pathname === '/cadastro';
    if (shouldHideNavbar) return null;

    return (
        <footer className="bg-blue-500">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-row py-6">
                    <div className="flex-1 mb-6 text-white mr-20">
                        <Link to="/home" className="text-white">
                            <img src="https://ik.imagekit.io/0h4imb0ky/img/logoNavbar.svg?updatedAt=1707248099251" className="h-10" />
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
                        <p className="uppercase text-white md:mb-6 font-bold">Legal</p>
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
                        <p className="uppercase text-white md:mb-6 font-bold">Social</p>
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
                        <p className="uppercase text-white md:mb-6 font-bold">Institucional</p>
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
