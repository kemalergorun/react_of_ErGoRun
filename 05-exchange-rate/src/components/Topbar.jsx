import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";
import { useContext } from "react";
import { CurrencyContext } from "../store/store";
import { formatCurrencies } from "../utils/format-currencies";

export default function Topbar() {
  const centralState = useContext(CurrencyContext);
  console.log(centralState);

  const usd = formatCurrencies("USD", centralState.rates);
  const eur = formatCurrencies("EUR", centralState.rates);

  return (
    <Navbar bg="dark" className="text-light p-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light">
          Exchange Rate
        </Navbar.Brand>
        <Nav>
          <Nav.Item className="me-3">$: {usd} TRY</Nav.Item>
          <Nav.Item className="me-3">€ {eur} TRY</Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
