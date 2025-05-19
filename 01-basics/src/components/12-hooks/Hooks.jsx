import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

// HOOKS
// 1- Hooks are used in function type components only, not in class type components.
// 2- Hooks must be written on the top level, they cannot be used in conditional or loop blocks.

export default function Hooks() {
  //      getter setter
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber((prev) => prev + 1);
    console.log(number);
  };

  return (
    <Container>
      <Button onClick={handleClick}>{number}</Button>
    </Container>
  );
}
