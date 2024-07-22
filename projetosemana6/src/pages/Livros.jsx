import { Card, Container, Badge, Button, Row, Col, CardImg } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { getLivros, deleteLivro } from "../firebase/livros";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import toast from "react-hot-toast";

function Livros() {
  const [livros, setLivros] = useState(null);
  //criando função para carregar dados do banco
  const usuario = useContext(UsuarioContext);
  function carregarDados() {
    getLivros().then((resultados) => {
      setLivros(resultados);
    });
  }

  const navigate = useNavigate()

  useEffect(() => {
    carregarDados();
  }, []);

  function excluirLivro(id) {
    // true -> apagar a tarefa, false -> não fazer nada
    const deletar = confirm("Tem certeza ?");
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success("Tarefa removida com sucesso");
        // Trazer a lista de tarefas atualizada
        carregarDados();
      });
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  if (usuario === null) {
    return <Navigate to="/login" />
  }

  function statusLivros(livro) {
    if (livro.concluido || livro.dataConclusao) {
      return <Badge bg="success">Leitura Concluída</Badge>;
    } else if (livro.dataInicio || livro.andamento) {
      return <Badge bg="dark">Leitura em Andamento</Badge>;
    } else if (!livro.concluido && !livro.andamento) {
      return <Badge bg="light" className="text-dark">Leitura Não Iniciada</Badge>;
    }
  }
  if (usuario === null) {
    // Navegar para /login
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
          <Row>
            {livros.map((livro) => {
              return (
                <Col sm={3} className="mb-5" key={livro.id}>
                  <Card className="card-livro">
                    <Card.Body>
                      <Card.Title>{livro.titulo}</Card.Title>
                      <img src={livro.capa} className="capa-livro"></img>
                      <Card.Text>Autor: {livro.autor}</Card.Text>
                      <Card.Text>Gênero: {livro.genero}</Card.Text>
                      {livro.dataInicio && (
                        <Card.Text>
                          Data de Início: {livro.dataInicio}
                        </Card.Text>
                      )}
                      {livro.dataConclusao && (
                        <Card.Text>
                          Data de Conclusão: {livro.dataConclusao}
                        </Card.Text>
                      )}
                      <div className="mb-2">
                        {statusLivros(livro)}
                      </div>
                      <Button variant="primary" className="me-2" onClick={() => navigate(`/livros/editar/${livro.id}`)}>
                        Editar
                      </Button>
                      <Button variant="danger" onClick={() => excluirLivro(livro.id)}>Excluir</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <Loader />
        )}
      </Container>
    </main>
  );
}

export default Livros;
