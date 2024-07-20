import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react"; 
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {UsuarioContext} from "./contexts/UsuarioContext";



//Páginas gerais.
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";



//Componentes
import Menu from "./components/Menu";
import Footer from "./components/Footer";

//Páginas de administração da biblioteca.
import NovoLivro from "./pages/NovoLivro"
import EditarLivro from "./pages/EditarLivro";
import Livros from "./pages/Livros";


function App(){
    const [loading, setLoading] = useState(true)
    const [logado, setusuarioLogado] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (usuario) => {
        setusuarioLogado(usuario)
        setLoading(false)
      });
    }, []);
      if(loading) {
     
         return null;
      }
 
  return (
    <>
    <UsuarioContext.Provider value={logado}>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/livros" element={<Livros/>}/>
        <Route path="/ajuda" element={<Ajuda/>}/>
        <Route path="/livros/adicionar" element={<NovoLivro/>}/>
        <Route path="/livros/editar/:id" element={<EditarLivro/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <Toaster position="top-center"/>
      </BrowserRouter>
      </UsuarioContext.Provider>
    </>
  )
}

export default App;