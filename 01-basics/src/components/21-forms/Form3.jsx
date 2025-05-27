import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { wait } from "../../utils/wait";

export default function Form3() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    };

    setIsLoading(true);

    try {
      await wait(2000);
      console.log(payload);
      console.log("Form submitted successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2 className="text-center text-primary">Form - 3</h2>
      <Form onSubmit={handleSubmit}>
        {/* First Name */}
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Please enter your first name"
            value={formData.firstName}
            onChange={handleFormChange}
          />
        </Form.Group>
        {/* Last Name */}
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Please enter your last name"
            value={formData.lastName}
            onChange={handleFormChange}
          />
        </Form.Group>

        {/* E-mail */}
        <Form.Group controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Please enter your e-mail"
            value={formData.email}
            onChange={handleFormChange}
          />
        </Form.Group>
        {/* Phone */}
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            placeholder="Please enter your phone number"
            value={formData.phoneNumber}
            onChange={handleFormChange}
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
