import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"

function Livros(){
    return(
        <main>
            <Container className="mt-5">
            <h1>Meus Livros</h1>
            <hr/>
            <Link className="btn btn-dark" to="/livros/adicionar">Adicionar Novo Livro</Link>
            </Container>

        </main>
    )
}

export default Livros;