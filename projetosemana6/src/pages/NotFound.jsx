import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>A página que você solicitou não existe.</h1>
      <Link to="/" className="mt-1 mx-auto d-block">
        <div className="d-flex justify-content-center">
        <Button bg="light" variant="light">
          Voltar para o menu principal
        </Button>
        </div>
      </Link>
    </main>
  );
}

export default NotFound;

