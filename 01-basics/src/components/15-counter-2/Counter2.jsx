import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function Counter2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `${counter} ${counter < 2 ? "time" : "times"} clicked`;

    return () => {
      document.title = "REACT COURSE";
    };
  }, [counter]);

  return (
    <Container>
      <h2 className="text-center text-primary my-3">Counter - 2</h2>
      <h3 className="text-center">
        {" "}
        {counter} {counter < 2 ? "time" : "times"} clicked the button below
      </h3>
      <Button
        className="mx-auto d-block my-3"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Click On Me
      </Button>
    </Container>
  );
}
