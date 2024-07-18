import { Container, Accordion, Button, Alert } from "react-bootstrap";

function Ajuda() {
    return (
        <main className="mt-4">
            <Container>
                <h1>Ajuda</h1>
                <hr/>
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
                            Se você tiver alguma dúvida ou encontrar algum problema, entre em contato conosco em <strong>oi@minhabiblioteca.com</strong>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

                {/* Botões de ação adicionais */}
                <Button className="mt-3 me-1">Entre em contato</Button>
                <Button className="mt-3 me-1" variant="outline-danger">Denunciar</Button>

            </Container>
        </main>
    );
}

export default Ajuda;
