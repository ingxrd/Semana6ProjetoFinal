import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth";
import toast from "react-hot-toast";



function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    function cadastrar(data) {
        cadastrarUsuario(data.nome, data.email, data.senha).then(() => {
            toast.success(`Olá ${data.nome}, você está logado!`);
            navigate("/livros");
            navigate("/");
        }).catch((error) => {
            toast.error("Um erro aconteceu:" + error.code)
        });
    }
    function handleEntrarGoogle() {
        entrarGoogle().then(() => {
            toast.success("Bem vindo!");
            navigate("/livros");
            navigate("/");
        });
    }

    return (
        <main className="main d-flex" style={{ backgroundImage: `url("fundo.jpg")` }} >
            <form className=" container mt-5 text-center form-area form-section" onSubmit={handleSubmit(cadastrar)}>
                <h1>Cadastro</h1>
                <hr />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-control"
                        {...register("nome", { required: true, maxLength: 100 })}
                    />
                    {errors.nome && <strong>Nome inválido!</strong>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <strong>Email inválido</strong>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", { required: true, minLength: 6 })}
                    />
                    {errors.senha && <strong>Senha inválida!</strong>}
                </div>
                <div className="container d-flex flex-column btn-area" fluid>
                    <Button variant="dark" className="mt-3 " type="submit">
                        Cadastrar
                    </Button>
                    <Button
                        loading
                        onClick={handleEntrarGoogle}
                        variant="warning"
                        className="mt-1"
                        type="button">
                        Entrar com o Google
                    </Button>
                </div>
            </form>
        </main>
    )
}
export default Cadastro;