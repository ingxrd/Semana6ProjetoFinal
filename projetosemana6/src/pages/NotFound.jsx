import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../assets/notFound.jpg";

function NotFound() {
  return (
    <main className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <h1 className="text-center mb-4">A página que você solicitou não existe.</h1>
      {/* <img src={notFound} alt="Página não encontrada" style={{ width: "100%", height: "auto" }} /> */}
      <Link to="/" className="mt-3">
        <Button variant="light">
          Voltar para o menu principal
        </Button>
      </Link>
    </main>
  );
}

export default NotFound;
