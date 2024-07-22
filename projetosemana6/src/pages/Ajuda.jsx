import { Button, Container, Accordion } from "react-bootstrap";
import fundo from "../assets/fundo.jpg";

function Ajuda() {
    return (
<main className="mt-4 main d-flex align-items-center" style={{ backgroundImage: `url(${fundo})`, minHeight: '100vh' }}>
            <Container className="form-container text-light">
                <div className="text-center text-dark bg-light p-3 rounded">
                    <h1 style={{ backgroundColor: "#f8f9fa", padding: "10px", display: "inline" }}>Ajuda</h1>
                    <hr className="my-4" />
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>O que é MinhaBiblioteca?</Accordion.Header>
                        <Accordion.Body>
                            MinhaBiblioteca é um sistema para gerenciamento da sua biblioteca pessoal. Nesta aplicação, você pode gerenciar os títulos físicos e virtuais que possui.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Como adicionar um livro?</Accordion.Header>
                        <Accordion.Body>
                            Para adicionar um livro, vá para a seção de <strong>Adicionar Livro</strong> e preencha os campos necessários como título, autor, e editora. Depois, clique em "Salvar".
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Como editar um livro?</Accordion.Header>
                        <Accordion.Body>
                            Para editar um livro, vá para a seção de <strong>Editar Livro</strong> e selecione o livro que deseja modificar. Faça as alterações necessárias nos campos e clique em "Salvar alterações".
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Como excluir um livro?</Accordion.Header>
                        <Accordion.Body>
                            Para excluir um livro, vá para a seção de <strong>Listar Livros</strong> e encontre o livro que deseja excluir. Clique no botão de <strong>Excluir</strong> ao lado do livro desejado para removê-lo do sistema.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>O que fazer em caso de dúvidas ou problemas?</Accordion.Header>
                        <Accordion.Body>
                            Se você tiver alguma dúvida ou encontrar algum problema, entre em contato conosco em <strong>oi@minhabiblioteca.com</strong>.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="d-flex justify-content-center mt-3">
                    <Button className="me-2">Entre em contato</Button>
                    <Button variant="danger" className="btn-black-hover">Denunciar</Button>
                </div>
            </Container>
        </main>
    );
}

export default Ajuda;
