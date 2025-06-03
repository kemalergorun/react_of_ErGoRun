import Container from "react-bootstrap/esm/Container";
import Child3 from "./Child3";

export default function Child2({ data2 }) {
  console.log("Child - 2 rendered/re-rendered");

  return (
    <Container>
      <h2 className="text-center text-success">Child - 2</h2>
      <Container>
        <Child3 data3={data2} />
      </Container>
    </Container>
  );
}
