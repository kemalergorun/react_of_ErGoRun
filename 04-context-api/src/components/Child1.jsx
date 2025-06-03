import Container from "react-bootstrap/esm/Container";
import Child2 from "./Child2";

export default function Child1({ data1 }) {
  console.log("Child - 1 rendered/re-rendered");

  return (
    <Container>
      <h2 className="text-center text-primary">Child - 1</h2>
      <Container>
        <Child2 data2={data1} />
      </Container>
    </Container>
  );
}
