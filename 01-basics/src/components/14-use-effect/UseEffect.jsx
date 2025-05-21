import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

// useEffect works asynchronously
export default function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  console.log("SYNC -1");

  //   Mounting
  //   callback + empty dependency array
  useEffect(() => {
    console.log("1- This line will run only once after first render");
    console.log("ASYNC -1");
  }, []);

  console.log("SYNC -2");

  //   Mounting + Every Update
  //   callback - no dependency array
  useEffect(() => {
    console.log("2- This line will run after first render and every re-render");
  });

  //   Mounting + Specific Update
  //   callback + state to be tracked
  useEffect(() => {
    console.log(
      "3a- This line will run after first render and every error state re-render"
    );
  }, [error]);

  useEffect(() => {
    console.log(
      "3b- This line will run after first render and every counter state re-render"
    );
  }, [counter]);

  useEffect(() => {
    console.log(
      "3c- This line will run after first render and every counter and error state re-render"
    );

    console.log("ASYNC -2");
  }, [counter, error]);

  //   Unmounting
  useEffect(() => {
    return () => {
      console.log("4- This line will run only component unmounts.");
    };
  }, []);

  return (
    <Container>
      <h2 className="text-center text-primary">Use Effect</h2>
      <ButtonGroup className="w-100">
        <Button
          variant="success"
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        >
          +
        </Button>
        <Button className="text-black" disabled variant="white">
          {counter}{" "}
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
        >
          -
        </Button>
      </ButtonGroup>
      <Button
        className="mt-3 w-100"
        variant={error ? "danger" : "success"}
        onClick={() => {
          setError((prev) => !prev);
        }}
      >
        {error ? "There are some errors" : "No Error Found"}
      </Button>
      {console.log("SYNC -3")}
    </Container>
  );
}
