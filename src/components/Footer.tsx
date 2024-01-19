import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <footer className="bg-blue-500 text-white">
            <div className="container mx-auto px-4 py-8">
                <h4 className="text-3xl font-semibold text-center mb-4">
                    Juntos aprendemos, juntos crescemos: EducaJunto, a rede social da educação!
                </h4>

                <div className="flex justify-center space-x-4 my-4">
                    <a href="https://github.com/conteudoGeneration/" target="_blank" rel="noopener noreferrer">
                        <GithubLogo size={32} />
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={32} />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={32} />
                    </a>
                    <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={32} />
                    </a>
                </div>

                <div className="text-center text-sm font-semibold">
                    Copyright © {data} EducaJunto.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
