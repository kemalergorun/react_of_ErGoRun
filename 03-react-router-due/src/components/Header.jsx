import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="primary" className="text-light">
      <Container>
        <Navbar.Brand className="text-light">React Router Due</Navbar.Brand>

        <Nav className="ms-auto  gap-2">
          <Nav.Link
            as={NavLink}
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/login"
            className={(isActive) => (isActive ? "active" : "")}
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Register
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
