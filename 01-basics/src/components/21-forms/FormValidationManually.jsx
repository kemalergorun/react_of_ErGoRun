import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { wait } from "../../utils/wait";

export default function FormValidationManually() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
  });

  //   If you create validation in this event, it will be checking for validation on every change:
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });

    // Validate the form as user types
    if (name === "lastName") {
      // check if the field has at least 2 char:
      if (value.trim().length < 5) {
        setError((prev) => {
          return {
            ...prev,
            lastName: "Last name must contain at least 5 character.",
          };
        });
      } // check if the field empty:
      else if (value.trim() === "") {
        setError((prev) => {
          return {
            ...prev,
            lastName: "You cannot leave this field empty",
          };
        });
      } else {
        setError((prev) => {
          return { ...prev, lastName: null };
        });
      }

      //   if(value.trim().length > 8){
      //     alert("You cannot write more than 8 char");
      //     return;
      //   }
    }

    if (name === "firstName") {
      if (!value.trim()) {
        setError((prev) => {
          return {
            ...prev,
            firstName: "First name cannot be empty.",
          };
        });
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        setError((prev) => {
          return {
            ...prev,
            email: "E-mail cannot be empty.",
          };
        });
      }
    }

    if (name === "phoneNumber") {
      if (!value.trim()) {
        setError((prev) => {
          return {
            ...prev,
            phoneNumber: "Phone number cannot be empty.",
          };
        });
      }
    }
  };

  //   If you create validation in this event, it will be checking it only if submit button is clicked:
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for non-empty
    // if (!formData.firstName) {
    //   setError((prev) => {
    //     return {
    //       ...prev,
    //       firstName: "You cannot leave first name empty.",
    //     };
    //   });
    //   return;
    // }

    if (Object.values(formData).some((value) => value.trim() === "")) {
      return setError((prev) => {
        return {
          ...prev,
          commonMessage: "All fields are required.",
        };
      });
    }

    // if(formData.firstName.length > 8){
    //     alert("You cannot write more than 8 char");
    //     return;
    // }

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
      <h2 className="text-center text-primary">Form Validation Manually</h2>
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
          {error.firstName && (
            <p className="text-danger"> {error.firstName} </p>
          )}
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
          {error.lastName && <p className="text-danger"> {error.lastName} </p>}
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
          {error.email && <p className="text-danger"> {error.email} </p>}
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
          {error.phoneNumber && (
            <p className="text-danger"> {error.phoneNumber} </p>
          )}
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
        {error.commonMessage && (
          <p className="text-center text-uppercase text-danger">
            {" "}
            {error.commonMessage}{" "}
          </p>
        )}
      </Form>
    </Container>
  );
}
