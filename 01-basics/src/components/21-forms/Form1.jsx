import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default function Form1() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container>
      <h2 className="text-center text-primary">Form - 1</h2>
      <Form.Label id="username" htmlFor="username">
        Username:
      </Form.Label>

      <Form.Control
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
      />

      {username}
    </Container>
  );
}
