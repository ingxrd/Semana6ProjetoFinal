import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function NotFound(){
    return(
        <main>
            <h1>Oops! Parece que a página que você solicitou não existe.</h1>
            <Link to="/" className="mt-1 mx-auto d-block">
        <Button bg="light" variant="light" >Voltar para o menu principal</Button>
      </Link> 

        </main>
    )
}

export default NotFound;