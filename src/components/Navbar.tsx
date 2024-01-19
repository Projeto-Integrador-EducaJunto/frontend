import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-blue-500 shadow-lg">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    <div className="flex items-center">
                        <a href="/" >
                            <img src="./src/assets/img/logoNavbar.svg" alt="Logo" className="h-12" />
                        </a>
                    </div>

                    <div className="hidden sm:flex space-x-4">
                        <Link to="/home" className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Home</Link>
                        <Link to="/sobre" className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Sobre</Link>
                        <div className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Entrar</div>
                        <div className="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Cadastrar</div>
                    </div>

                    <div className="sm:hidden flex items-center">
                        <button type="button" className="text-gray-200 hover:text-white focus:outline-none focus:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar