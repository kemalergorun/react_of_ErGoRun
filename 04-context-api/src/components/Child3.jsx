import Container from "react-bootstrap/esm/Container";

export default function Child3({ data3 }) {
  console.log("Child - 3 rendered/re-rendered");

  return (
    <Container>
      <h2 className="text-center text-info">Child - 3</h2>
      <Container>
        <ul>
          <li>{data3}</li>
        </ul>
      </Container>
    </Container>
  );
}
