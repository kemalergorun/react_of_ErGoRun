import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { wait } from "../../utils/wait";

export default function Form2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    setIsLoading(true);

    try {
      await wait(2000);
      console.log(payload);
      console.log("Form submitted successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2 className="text-center text-primary">Form - 2</h2>
      <Form onSubmit={handleSubmit}>
        {/* First Name */}
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Please enter your first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Form.Group>
        {/* Last Name */}
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Please enter your last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Form.Group>

        {/* E-mail */}
        <Form.Group controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Please enter your e-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        {/* Phone */}
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Please enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </Form.Group>
        {/* Button */}
        <Button
          type="submit"
          variant="danger"
          className="mt-3 w-100"
          title={isLoading ? "Sending..." : "Send"}
        >
          {isLoading ? (
            <>
              <Spinner animation="grow" variant="warning" size="sm" />
              Sending
              <Spinner animation="grow" variant="warning" size="sm" />
            </>
          ) : (
            "Send"
          )}
        </Button>
      </Form>
    </Container>
  );
}
