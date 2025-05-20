import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

// HOOKS
// 1- Hooks are used in function type components only, not in class type components.
// 2- Hooks must be written on the top level, they cannot be used in conditional or loop blocks.
// 3- Render (first load) X Re-render (every update after first load)

// const [state, setState] = useState(initialState);
// We can use Object, Array, or returned function in initial state.
// If returned function is used in initial state, make sure that you use it without parenthesis.

export default function Hooks() {
  //      getter setter
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("John Doe");
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const sum = (a, b) => {
    console.log("I am rendered or re-rendered");
    return a + b;
  };

  const [total, setTotal] = useState(sum);

  const handleClick = () => {
    // We may encounter problems in frequent uses, if the new state is related with the previous state, as setNumber works asynchronously.
    setNumber((prev) => prev + 1);
    console.log(number);
  };

  const handleClickName = () => {
    setName("Mark Twain");
  };

  const handleTheme = () => {
    setTheme({ ...theme, color: "white", backgroundColor: "black" });
    console.log(theme);
  };

  const handleFunction = () => {
    setTotal(sum(5, 7));
  };

  return (
    <Container style={{ ...theme }}>
      <Button onClick={handleClick}>{number}</Button>
      <Button variant="danger" onClick={handleClickName}>
        {name}
      </Button>
      <Button variant="dark" onClick={handleTheme}>
        Change Theme
      </Button>
      <Button variant="warning" onClick={handleFunction}>
        func
      </Button>
    </Container>
  );
}
