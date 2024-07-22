import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { entrarGoogle, loginUsuario, resetPass } from "../firebase/auth";
import toast from "react-hot-toast";


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    
    const navigate = useNavigate();
    
    
    function entrar(data) {
        // data é um objeto com os dados do formulário
        loginUsuario(data.email, data.senha).then(() => {
            toast.success("Bem vindo!")
            navigate("/livros")
            navigate("/")
        }).catch(() => {
            toast.error("Email ou senha incorretos.")
        })
    }

    function handleEntrarGoogle() {
        entrarGoogle().then(() => {
            toast.success("Bem vindo!")
            navigate("/livros");

        })
    }

    return (
        <main>
            <form className=" container mt-5 text-center form-area form-section" onSubmit={handleSubmit(entrar)}>
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
                <div className="container d-flex flex-column btn-area" fluid>
                    <Button variant="dark" className="mt-5  " type="submit">
                        Entrar
                    </Button>
                    <Button
                        variant="warning"
                        className="mt-1 w-100"
                        type="button"
                        onClick={handleEntrarGoogle}>

                        Entrar com o Google
                    </Button>
                    <a href="/login/esqueci" className="mt-1 link-login">Esqueci a senha</a>
                    
                </div>
            </form>
        </main>
    );
}

export default Login;
