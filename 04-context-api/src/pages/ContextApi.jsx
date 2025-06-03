import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router";
import Content from "../components/Content";
import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { ThemeContext } from "../store/store";

export default function ContextApi() {
  const centralState = useContext(ThemeContext);

  return (
    <Container>
      <Link to="/">Go to Home Page</Link>
      <h2 className="text-center text-danger">Context API</h2>
      <Button
        onClick={centralState.handleTheme}
        className="d-block mx-auto my-3"
        variant="danger"
      >
        Change Theme
      </Button>
      <Content />
    </Container>
  );
}
