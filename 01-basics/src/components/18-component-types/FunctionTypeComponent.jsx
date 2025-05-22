import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

export default function FunctionTypeComponent(props) {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // console.log("ASYNC - FTC - empty dependency array");
  }, []);

  useEffect(() => {
    console.log("ASYNC - FTC - counter updated");
  }, [counter]);
  useEffect(() => {
    console.log("ASYNC - FTC - theme updated");
  }, [theme]);
  useEffect(() => {
    console.log("ASYNC - FTC - props updated");
  }, [props.hello]);

  useEffect(() => {
    return () => {
      console.log("ASYNC - FTC - unmounting phase");
    };
  }, []);

  return (
    <Container>
      <h2 className="text-center text-primary">Function Type Component</h2>
      <Button
        className="w-100"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increment - {counter}
      </Button>
      <Button
        className="w-100 mt-1"
        variant="danger"
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        Change Theme - {theme}
      </Button>
    </Container>
  );
}
