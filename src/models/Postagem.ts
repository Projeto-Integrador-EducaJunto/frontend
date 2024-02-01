import Tema from "./Tema";
import Usuario from "./Usuario";

export default interface Postagem{
id: number;
conteudo: string;	
anexo: string;	
estado:number;
data_hora: string;	
tema: Tema | null;
usuario: Usuario | null;
}