import { Card, Container, Badge, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLivros } from "../firebase/livros";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

function Livros() {
  const [livros, setLivros] = useState(null);
  //criando função para carregar dados do banco
  function carregarDados() {
    getLivros().then((resultados) => {
      setLivros(resultados);
    });
  }

  useEffect(() => {
    carregarDados();
  }, []);

  function statusLivros(livro){
      if (livro.concluido || livro.dataConclusao){
        return <Badge bg="success">Leitura Concluída</Badge>;
      } else if (livro.dataInicio || livro.andamento){
        return <Badge bg="dark">Leitura em Andamento</Badge>;
      } else if (!livro.concluido && !livro.andamento){
        return <Badge bg="light" className="text-dark">Leitura Não Iniciada</Badge>;
      }
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
                <Col md={4} className="mb-4" key={livro.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{livro.titulo}</Card.Title>
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
                      <Button variant="primary" className="me-2">
                        Editar
                      </Button>
                      <Button variant="danger">Excluir</Button>
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
