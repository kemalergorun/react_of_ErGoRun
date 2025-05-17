import { Accordion, Button, Col, Container, Image, Row } from "react-bootstrap";
import profile from "../../assets/images/profile.jpg";

export default function ReactBootstrap() {
  return (
    <div>
      <div className="accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <Container>
        <Image
          src={profile}
          width={200}
          height={200}
          roundedCircle
          className="object-fit-cover object-position-center mx-auto d-block mt-5"
        />

        <Button className="d-block mx-auto my-3" variant="info">
          React Bootstrap Button
        </Button>
      </Container>

      <Container>
        <Row className="text-center gap-1">
          <Col className="bg-primary text-white p-3 rounded-2">H</Col>
          <Col className="bg-danger text-white p-3 rounded-2">E</Col>
          <Col className="bg-dark text-white p-3 rounded-2">L</Col>
          <Col className="bg-warning text-white p-3 rounded-2">L</Col>
          <Col className="bg-success text-white p-3 rounded-2">O</Col>
        </Row>
      </Container>
    </div>
  );
}
