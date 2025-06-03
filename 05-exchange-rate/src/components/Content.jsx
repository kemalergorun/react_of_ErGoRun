import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Alert from "react-bootstrap/esm/Alert";
import { useContext, useState } from "react";
import { CurrencyContext } from "../store/store";
import { formatCurrencies } from "../utils/format-currencies";

export default function Content() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");

  const centralState = useContext(CurrencyContext);

  const handleChange = (e) => {
    if (e.target.name === "amount") {
      setAmount(e.target.value);
    } else if (e.target.name === "currency") {
      setCurrency(e.target.value);
    }
  };

  return (
    <Container>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter the amount"
          className="w-100 mt-3"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        <Form.Select
          className="mt-3"
          name="currency"
          value={currency}
          onChange={handleChange}
        >
          {centralState &&
            centralState?.rates &&
            Object.keys(centralState?.rates).map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </Form.Select>
      </Form.Group>

      <Alert className="mt-3">
        <strong>Entered Amount: </strong>
        {formatCurrencies(currency, centralState?.rates, amount)}
      </Alert>
    </Container>
  );
}
