import Container from "react-bootstrap/Container";
import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

export default function ParentComponent() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState(true);

  const handleClick = (increaseValue) => {
    setCounter((previousState) => previousState + increaseValue);
  };

  const handleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <Container>
      <h2 className="text-center text-primary">Parent Component</h2>
      <h3 className="text-center"> {counter} times clicked</h3>
      {/* <Button onClick={handleClick} className="mx-auto d-block my-3">Increase Counter</Button> */}
      <ChildComponent
        handleClick={handleClick}
        handleTheme={handleTheme}
        theme={theme}
      />
      {theme ? <CiSun size="5rem" /> : <FaMoon size="5rem" />}
    </Container>
  );
}
