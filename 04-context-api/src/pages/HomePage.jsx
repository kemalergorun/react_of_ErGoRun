import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Child1 from "../components/Child1";
import { useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  // Imagine that this data is fetched from the server:
  const [data, setData] = useState("John Doe");

  //   Whenever state is changed, child components will be re-rendered as well. This will cause unnecessary re-renders.
  const handleName = () => {
    setData((prev) => (prev === "John Doe" ? "Jane Flick" : "John Doe"));
  };

  return (
    <Container>
      <Container className="d-flex justify-content-center align-items-center my-3">
        <Link to="/context-api">
          <Button>Go to Context API</Button>
        </Link>
      </Container>
      <h1 className="text-center text-danger">Home Page</h1>
      <Button type="button" onClick={handleName}>
        Change Name
      </Button>
      <Container>
        <Child1 data1={data} />
      </Container>
    </Container>
  );
}
