import { addDoc, collection} from "firebase/firestore";
import { db } from "./config";



export const livrosRef = collection(db, "livros"); 

export async function novoLivro(dados) { 
    await addDoc(livrosRef, dados);

}