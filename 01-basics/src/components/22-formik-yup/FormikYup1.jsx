import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { wait } from "../../utils/wait";
import Spinner from "react-bootstrap/Spinner";

export default function FormikYup1() {
  // Formik consist of 3 main parts:
  // 1- Initial Values
  // 2- Validation Schema
  // 3- onSubmit

  const formik = useFormik({
    // Initial Values
    initialValues: {
      username: "",
      password: "",
    },
    // Validation Schema
    validationSchema: yup.object({
      username: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be at least 3 character")
        .max(15, "Username must be at most 15 characters"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 character"),
    }),
    //   Submit Function
    onSubmit: async (values) => {
      try {
        await wait(2000);
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log(formik);

  return (
    <Container>
      <h2 className="text-center text-primary">Formik - Yup - 1</h2>
      <Form onSubmit={formik.handleSubmit}>
        {/* Username */}
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your username"
            autoComplete="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.touched.username && formik?.errors?.username && (
            <Form.Text className="text-danger">
              {formik?.errors?.username}
            </Form.Text>
          )}
        </Form.Group>
        {/* Password */}
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="*********"
            autoComplete="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik?.errors?.password && (
            <Form.Text className="text-danger">
              {formik?.errors?.password}
            </Form.Text>
          )}
        </Form.Group>

        <Button
          className="w-100 my-3"
          type="submit"
          title="Send"
          variant="info"
        >
          {formik.isSubmitting ? (
            <>
              <Spinner size="sm" />
              Sending...
            </>
          ) : (
            "Send"
          )}
        </Button>
      </Form>
    </Container>
  );
}
