import Container from "react-bootstrap/esm/Container";
import LongContent from "./LongContent";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";

// When to NOT use useRef
// 1- Not for triggering UI updates - (use useState)
// 2- Not a replacement of useMemo or useCallback

export default function UseRef() {
  const [counter, setCounter] = useState(0);

  // Define useRef with initial value and assign it to a const/let
  const footerRef = useRef(null);
  const inputRef = useRef(null);
  let counterRef = useRef(0);

  const goToFooter = () => {
    console.log(footerRef);
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const focusInput = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  const increaseCounter = () => {
    console.log(counterRef);
    // This is going to work but it is not recommended by React at all. If you have to read or write something during rendering, use state instead.
    //   counterRef.current.innerText++;
    setCounter((prev) => prev + 1);
  };

  return (
    <Container>
      <h2 className="text-center text-primary">UseRef</h2>
      <ButtonGroup className="w-100 my-3">
        <Button variant="success" title="Go to footer" onClick={goToFooter}>
          Go to the footer
        </Button>
        <Button variant="danger" title="Focus on Input" onClick={focusInput}>
          Focus on Input
        </Button>
        <Button
          title="Increase counter"
          ref={counterRef}
          onClick={increaseCounter}
        >
          {counter}{" "}
        </Button>
      </ButtonGroup>
      <LongContent />
      {/* Assigned const/let must be used as a ref attribute to create connection between them. */}
      <input type="text" className="w-100 form-control my-3" ref={inputRef} />
      <footer className="text-center my-3" ref={footerRef}>
        All Rights Reserved &copy;
      </footer>
    </Container>
  );
}
