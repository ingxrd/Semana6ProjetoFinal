import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { entrarGoogle, loginUsuario, resetPass } from "../firebase/auth";
import toast from "react-hot-toast";
import fundo from "../assets/fundo.jpg";


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    
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
            <Container className="form-container ">
            <Form className=" form-area" onSubmit={handleSubmit(entrar)}>
                <h1>Login</h1>
                <hr />
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", { required: "Campo obrigatório!" })}
                    />
                    {errors.email && (
                        <strong className="invalid">{errors.email.message}</strong>
                    )}
                </div>
                
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", {
                            required: "Campo obirgatório",
                            minLength: { value: 6, message: "" },
                            minLength: { value: 6, message: "Mínimo de 6 caracteres." },
                        })}
                    />
                    {errors.senha && (
                        <strong className="invalid">{errors.senha.message}</strong>
                    )}
                </div >
                    <Button variant="dark"  type="submit">
                        Entrar
                    </Button>
                    <Button
                        variant="warning"
                        type="button"
                        onClick={handleEntrarGoogle}>

                        Entrar com o Google
                    </Button>
                    <a href="/login/esqueci" className="mt-1 link-login">Esqueci a senha</a>
                    
                
                
            </Form>
            </Container>
        </main>
    )
}

export default Login;


