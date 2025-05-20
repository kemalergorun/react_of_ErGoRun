import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Counter1() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // If current state is taking the reference of previous state all the time, then we should use callbacks to update state:
    setCounter((previousValue) => previousValue + 1);
  };

  const handleDecrement = () => {
    // If current state is taking the reference of previous state all the time, then we should use callbacks to update state:
    setCounter((prev) => prev - 1);
  };

  const handleReset = () => {
    // If current state is NOT taking the reference of previous state, then we can give the value directly as follows:
    setCounter(0);
  };

  return (
    <Container>
      <h2 className="text-center text-primary">Counter - 1</h2>

      <ButtonGroup className="w-100 mt-5">
        <Button
          variant="danger"
          type="button"
          className="w-100"
          onClick={handleIncrement}
        >
          +
        </Button>

        <Button variant="secondary" className="w-100" disabled>
          {counter}
        </Button>

        <Button
          variant="success"
          className="w-100"
          type="button"
          onClick={handleDecrement}
        >
          -
        </Button>

        <Button
          variant="info"
          className="w-100"
          type="button"
          onClick={handleReset}
        >
          Reset
        </Button>
      </ButtonGroup>
    </Container>
    // last commit
    //done
  );
}
