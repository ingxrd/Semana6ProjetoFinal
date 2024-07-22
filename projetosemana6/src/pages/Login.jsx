import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { entrarGoogle, loginUsuario } from "../firebase/auth";
import toast from "react-hot-toast";
import fundo from "../assets/fundo.jpg";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function entrar(data) {
        loginUsuario(data.email, data.senha)
            .then(() => {
                toast.success("Bem vindo!");
                navigate("/livros");
            })
            .catch(() => {
                toast.error("Email ou senha incorretos.");
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
                <Form className="form-area form-section" onSubmit={handleSubmit(entrar)}>
                    <h1 className="text-center">Login</h1>
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" {...register("email", { required: true })} />
                        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" {...register("senha", { required: true, minLength: 6 })} />
                        {errors.senha && <Form.Text className="text-danger">{errors.senha.message}</Form.Text>}
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="dark" type="submit">
                            Entrar
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

export default Login;


