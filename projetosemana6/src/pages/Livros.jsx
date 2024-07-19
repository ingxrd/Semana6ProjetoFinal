import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"

function Livros(){
    return(
        <main className=" d-flex flex-column">
            <Container className="mt-5 cont" >
            <h1>Meus Livros</h1>
            <hr/>
            <Link className="btn btn-dark btn-lg but" to="/livros/adicionar">Adicionar Novo Livro</Link>
            </Container>

        </main>
    )
}

export default Livros;