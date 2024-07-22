import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./config";



export const livrosRef = collection(db, "livros"); 

export async function novoLivro(data) { 
    await addDoc(livrosRef, data);
}

export async function getLivros() { 
    const snapshot = await getDocs(livrosRef); //livrosRef é a minha coleção 
    const livros = []; 

    snapshot.forEach((doc) => {
        livros.push({...doc.data(), id: doc.id})
    });
    return livros;


}

export async function deleteLivro(id) {
    // Cria uma referência para um documento da coleção
    const livroDoc = doc(livrosRef, id);
    // Deletar o documento da coleção de acordo com o id
    await deleteDoc(livroDoc);
  }
  
  export async function getLivro(id) {
    // Cria uma referência para um documento específico da coleção
    const livroDoc = doc(livrosRef, id);
    // Trazer as informações do documento
    const snapshot = await getDoc(livroDoc);
  
    // Retorna os dados dentro do documento
    // {titulo: '', descricao: '', ...}
    return snapshot.data();
  }
  
  export async function updateLivro(id, data) {
    const livroDoc = doc(livrosRef, id);
    await updateDoc(livroDoc, data)
  }

  