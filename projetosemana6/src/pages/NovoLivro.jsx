import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config'; // Certifique-se de que o caminho está correto

function NovoLivro() {
  const [imgURL, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();

  const handleUpload = (file) => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      error => {
        toast.error("Erro ao fazer upload da imagem.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgURL(url);
          setValue('capa', url);
        });
      }
    );
  };

  const onSubmit = async (dados) => {
    try {
      if (dados.capa) {
        await novoLivro({ ...dados, capa: imgURL });
      } else {
        await novoLivro(dados);
      }
      toast.success("Livro adicionado!");
      navigate("/livros");
    } catch (error) {
      toast.error("Erro ao adicionar Livro!");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleUpload(file);
  };

  return (
    <main className="d-flex text-center">
      <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
        <h1>Novo Livro 📖</h1>
        <hr />

        <div>
          <label htmlFor="capa">Foto da Capa</label>
          <input
            type="file"
            id="capa"
            {...register("capa", { required: true })}
            onChange={handleFileChange}
          />
          {progress > 0 && <div>Progresso: {progress}%</div>}
          {imgURL && <img src={imgURL} alt="Imagem" width="150"/>}
        </div>

        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true })}
          />
          {errors.titulo && <strong className="invalid">Campo Obrigatório!</strong>}
        </div>

        <div>
          <label htmlFor="genero">Gênero</label>
          <input
            type="text"
            id="genero"
            className="form-control"
            {...register("genero")}
          />
        </div>

        <div>
          <label htmlFor="autor">Autor(a)</label>
          <input
            type="text"
            id="autor"
            className="form-control"
            {...register("autor", { required: true })}
          />
          {errors.autor && <strong className="invalid">Campo Obrigatório!</strong>}
        </div>

        <div>
          <label htmlFor="dataInicio">Data de Início</label>
          <input
            type="date"
            id="dataInicio"
            className="form-control text-center"
            {...register("dataInicio")}
          />
        </div>

        <div>
          <label htmlFor="dataConclusao">Data de Conclusão</label>
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
          <label htmlFor="concluido" className="form-check-label">Concluído</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            id="andamento"
            className="form-check-input"
            {...register("andamento")}
          />
          <label htmlFor="andamento" className="form-check-label">Em andamento</label>
        </div>

        <div>
          <label htmlFor="descricao">Comentários</label>
          <textarea
            className="form-control"
            id="descricao"
            rows={4}
            {...register("descricao")}
          />
        </div>

        <Button variant="dark" className="w-100 mt-1" type="submit">
          Salvar Livro
        </Button>
      </form>
    </main>
  );
}

export default NovoLivro;
