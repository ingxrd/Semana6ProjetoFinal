import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth";
import toast from "react-hot-toast";
import fundo from "../assets/fundo.jpg";

function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function cadastrar(data) {
        cadastrarUsuario(data.nome, data.email, data.senha).then(() => {
            toast.success(`Olá ${data.nome}, você está logado!`);
            navigate("/livros");
        }).catch((error) => {
            toast.error("Um erro aconteceu:" + error.code);
        });
    }

    function handleEntrarGoogle() {
        entrarGoogle().then(() => {
            toast.success("Bem vindo!");
            navigate("/livros");
        });
    }

    return (
        <main className="main d-flex align-items-center" style={{ backgroundImage: `url(${fundo})`, minHeight: '100vh' }}>
            <Container className="form-container">
                <Form className="form-area form-section" onSubmit={handleSubmit(cadastrar)}>
                    <h1 className="text-center">Cadastro</h1>
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" {...register("nome", { required: true, maxLength: 100 })} />
                        {errors.nome && <Form.Text className="text-danger">Nome inválido!</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" {...register("email", { required: true })} />
                        {errors.email && <Form.Text className="text-danger">Email inválido!</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" {...register("senha", { required: true, minLength: 6 })} />
                        {errors.senha && <Form.Text className="text-danger">Senha inválida!</Form.Text>}
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="dark" type="submit">
                            Cadastrar
                        </Button>
                        <Button variant="warning" onClick={handleEntrarGoogle} type="button">
                            Entrar com o Google
                        </Button>
                    </div>
                </Form>
            </Container>
        </main>
    );
}

export default Cadastro;


