import Tema from "./Tema";

export default interface Postagem{
id: number;
conteudo: string;	
anexo: string;	
estado:number;
data_hora: string;	
tema: Tema | null;
}