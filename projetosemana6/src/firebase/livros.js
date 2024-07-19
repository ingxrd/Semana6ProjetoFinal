import { addDoc, collection, getDocs} from "firebase/firestore";
import { db } from "./config";



export const livrosRef = collection(db, "livros"); 

export async function novoLivro(dados) { 
    await addDoc(livrosRef, dados);

}

export async function getLivros() { 
    const snapshot = await getDocs(livrosRef); //livrosRef é a minha coleção 
    const livros = []; 

    snapshot.forEach((doc) => {
        livros.push({...doc.data(), id: doc.id})
    });
    return livros;
}