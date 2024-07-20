import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { novoLivro } from "../firebase/livros";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";

function NovoLivro(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const Navigate = useNavigate();

      function salvarLivro(dados){
        novoLivro(dados).then(() => {
            toast.success("Livro adicionado!");
            Navigate("/livros");
          })
          .catch(() => {
            toast.error("Erro ao adicionar Livro!");
          });
      }

    return(
        
    <main className="d-flex text-center">
      <form className="form-section" onSubmit={handleSubmit(salvarLivro)}>
        <h1>Novo Livro 📖</h1>
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
            {...register("dataInicio")}
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
        
        <div className="form-check">
          <input
            type="checkbox"
            id="andamento"
            className="form-check-input"
            {...register("andamento")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Em andamento
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
          Salvar Tarefa
        </Button>
      </form>
    </main>
    )
}

export default NovoLivro;