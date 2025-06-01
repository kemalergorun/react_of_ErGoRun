import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginValid, setIsLoginValid] = useState(false);
  const [display, setDisplay] = useState("d-none");
  const [error, setError] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setDisplay("d-block");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_DUMMY_JSON_API}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (!response.ok) throw new Error("Invalid Credentials");

      const data = await response.json();
      setIsLoginValid(true);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (isLoginValid) {
      setTimeout(() => (window.location = "https://react.dev/"), 1000);
    }
  }, [isLoginValid]);

  return (
    <Card className="mt-5 w-50 mx-auto bg-dark">
      <h2 className="text-center text-info mt-3">Login Practice</h2>
      <Card.Body>
        <Form
          className="form-control p-3 bg-dark text-white"
          onSubmit={handleLogin}
        >
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Please enter your username"
              value={username}
              onChange={handleUsername}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="*********"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>
          <Button
            className="w-100 mt-4"
            type="submit"
            title="Submit"
            variant="info"
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        {isLoginValid ? (
          <Alert variant="success" className="text-center">
            Logging In...
          </Alert>
        ) : (
          <Alert variant="danger" className={`${display} text-center`}>
            {error}
          </Alert>
        )}
      </Card.Footer>
    </Card>
  );
}
