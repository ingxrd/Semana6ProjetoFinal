import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { getLivro, updateLivro } from "../firebase/livros";
import toast from "react-hot-toast";

function EditarLivro() {
  const { id } = useParams();
  const usuario = useContext(UsuarioContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const navigate = useNavigate();
  
  function carregarDados() {
    getLivro(id).then((livro) => {
      if (livro) {
      } else {
        navigate("/livros");
      }
    });
  }

  function handleFormSubmit(data) {
    atualizarLivro(data);
  }

  function atualizarLivro(data) {
    console.log(data)
    updateLivro(id, data).then(() => {
      toast.success("Livro atualizado com sucesso");
      navigate("/livros");
    });
  }
  
  return(
        <main className="d-flex text-center">
          <form className="form-section" onSubmit={handleSubmit(handleFormSubmit)}>
            <h1>Editar Livro 📖</h1>
            <hr />
            
            <div>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                id="titulo"
                className="form-control"
                {...register("titulo", { required: true})}
              />
              {errors.titulo && (
                <strong className="invalid">Campo Obrigatório!</strong>
              )}
            </div>
            
            <div>
              <label htmlFor="genero">Gênero</label>
              <input
                type = "text"
                id="genero"
                className="form-control"
                {...register("genero")}
              ></input>
              
            </div>
            
            <div>
              <label htmlFor="genero">Autor(a)</label>
              <input
                type = "text"
                id="autor"
                className="form-control"
                {...register("autor", {required:true})}
              ></input>
              
            </div>
            
            <div>
              <label htmlFor="data" >Data de Início</label>
              <input
                type="date"
                id="dataInicio"
                className="form-control text-center"
                {...register("dataInicio", {required: true})}
              />
            </div>
            
            <div>
              <label htmlFor="data">Data de Conclusão</label>
              <input
                type="date"
                id="dataConclusao"
                className="form-control text-center"
                {...register("dataConclusao")}
              />
            </div>
            
            <div className="form-check">
              <input
                type="checkbox"
                id="concluido"
                className="form-check-input"
                {...register("concluido")}
              />
              <label htmlFor="concluido" className="form-check-label">
                Concluído
              </label>
            </div>
            
            <div>
              <label htmlFor="comentários">Comentários</label>
              <textarea
              className="form-control"
              id = "descricao"
              rows={4}
              >
    
              </textarea>
             </div>
            <Button variant="dark" className="w-100 mt-1" type="submit">
              Atualizar Livro
            </Button>
          </form>
        </main>
        )
    }
    
export default EditarLivro;