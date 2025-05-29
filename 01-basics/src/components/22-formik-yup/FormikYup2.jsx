import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { wait } from "../../utils/wait";
import Spinner from "react-bootstrap/esm/Spinner";

const formFields = [
  {
    id: 1,
    autoComplete: "given-name",
    label: "First Name",
    name: "firstName",
    placeholder: "Enter your first name",
    type: "text",
  },
  {
    id: 2,
    autoComplete: "family-name",
    label: "Last Name",
    name: "lastName",
    placeholder: "Enter your last name",
    type: "text",
  },
  {
    id: 3,
    autoComplete: "email",
    label: "E-mail",
    name: "email",
    placeholder: "Enter your e-mail",
    type: "text",
  },
  {
    id: 4,
    autoComplete: "tel",
    label: "Phone Number",
    name: "phoneNumber",
    placeholder: "Enter your phone number",
    type: "text",
  },
];

export default function FormikYup2() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(30, "First name must be at most 30 characters"),
      lastName: yup
        .string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(30, "Last name must be at most 30 characters"),
      email: yup
        .string()
        .required("E-mail is required")
        .email("Invalid e-mail format"),
      phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(
          /^\+?[0-9]{10}$/,
          "Phone number must be exactly 10 digits and can optionally starts with '+' sign"
        ),
    }),
    onSubmit: async (values, actions) => {
      console.log(formik.getFieldProps(firstName));
      await wait(3000);
      console.log("Values", values);
      console.log("Actions", actions);
      actions.resetForm();
    },
  });

  return (
    <Container>
      <h2 className="text-center text-primary">Formik - Yup - 2</h2>

      {/* Form Fields */}
      <Form onSubmit={formik.handleSubmit}>
        {formFields.map((formField, index) => (
          <Form.Group controlId={formField.name} key={formField.id}>
            <Form.Label>{formField.label}</Form.Label>
            <Form.Control
              type={formField.type}
              placeholder={formField.placeholder}
              autoComplete={formField.autoComplete}
              name={formField.name}
              {...formik.getFieldProps(formField.name)}
            />
            {formik.touched[formField.name] &&
              formik.errors[formField.name] && (
                <Form.Text className="text-danger">
                  {formik.errors[formField.name]}
                </Form.Text>
              )}
          </Form.Group>
        ))}

        {/* <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            autoComplete="family-name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.touched["lastName"] && formik.errors.lastName && (
            <Form.Text className="text-danger">
              {formik.errors.lastName}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your e-mail"
            autoComplete="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched["email"] && formik.errors.email && (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            autoComplete="tel"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
          {formik.touched["phoneNumber"] && formik.errors.phoneNumber && (
            <Form.Text className="text-danger">
              {formik.errors.phoneNumber}
            </Form.Text>
          )}
        </Form.Group> */}

        <Button type="submit" className="w-100 my-3" variant="outline-danger">
          {formik.isSubmitting ? (
            <>
              <Spinner size="sm" />
              Sending...
              <Spinner size="sm" />
            </>
          ) : (
            "Send"
          )}
        </Button>
      </Form>
    </Container>
  );
}
