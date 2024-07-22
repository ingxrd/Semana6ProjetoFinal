import { Button } from "react-bootstrap";
import { resetPass } from "../firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Reset() {
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm();

    function resPass(email) {
        resetPass(email.email).then(() => {
            toast.success("Se você possuir uma conta cadastrada, o email de redefinição será enviado.")
            navigate("/login")
        }).catch(() => {
            toast.error("Erro!")
        })
    };
    return (

        <form className=" container mt-5 text-center form-area form-section" onSubmit={handleSubmit(resPass)}>
            <h1>Esqueci a senha</h1>
            <hr />
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    {...register("email")}
                />
                <Button className="" variant="warning mt-3"onClick={handleSubmit(resPass)}>
                    Enviar
                </Button>

            </div>
        </form>

    )
}



export default Reset