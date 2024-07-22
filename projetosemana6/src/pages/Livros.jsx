import { Card, Container, Badge, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getLivros, deleteLivro } from "../firebase/livros";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import toast from "react-hot-toast";

function Livros() {
  const [livros, setLivros] = useState(null);
  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();

  useEffect(() => {
    carregarDados();
  }, []);

  function carregarDados() {
    getLivros().then((resultados) => {
      setLivros(resultados);
    });
  }

  function excluirLivro(id) {
    const deletar = window.confirm("Tem certeza?");
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success("Livro removido com sucesso");
        carregarDados();
      });
    }
  }

  function statusLivros(livro) {
    if (livro.concluido || livro.dataConclusao) {
      return <Badge bg="success">Leitura Concluída</Badge>;
    } else if (livro.dataInicio || livro.andamento) {
      return <Badge bg="dark">Leitura em Andamento</Badge>;
    } else {
      return <Badge bg="light" text="dark">Leitura Não Iniciada</Badge>;
    }
  }

  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <Container className="mt-5 cont">
        <h1>Meus Livros</h1>
        <hr />
        <Link className="btn btn-dark mb-3 but" to="/livros/adicionar">
          Adicionar Novo Livro
        </Link>
        {livros ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {livros.map((livro) => (
              <Col key={livro.id}>
                <Card className="card-livro h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{livro.titulo}</Card.Title>
                    <img src={livro.capa} className="capa-livro" alt="Capa do livro" />
                    <Card.Text>Autor: {livro.autor}</Card.Text>
                    <Card.Text>Gênero: {livro.genero}</Card.Text>
                    {livro.descricao && (
                      <Card.Text>Comentário: {livro.descricao}</Card.Text>
                    )}
                    {livro.dataInicio && (
                      <Card.Text>Data de Início: {livro.dataInicio}</Card.Text>
                    )}
                    {livro.dataConclusao && (
                      <Card.Text>Data de Conclusão: {livro.dataConclusao}</Card.Text>
                    )}
                    <div className="mt-auto">
                      {statusLivros(livro)}
                    </div>
                    <div className="mt-2">
                      <Button variant="primary" className="me-2" onClick={() => navigate(`/livros/editar/${livro.id}`)}>
                        Editar
                      </Button>
                      <Button variant="danger" onClick={() => excluirLivro(livro.id)}>
                        Excluir
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Loader />
        )}
      </Container>
    </main>
  );
}

export default Livros;
