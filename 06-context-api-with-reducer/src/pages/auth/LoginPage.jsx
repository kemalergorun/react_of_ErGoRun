import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Form as RouterForm, useActionData, useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import { AuthContext, types } from "../../store/auth-store";
import { useEffect } from "react";

export default function LoginPage() {
  // const [username, setUsername] = useState("emilys");
  // const [password, setPassword] = useState("emilyspass");
  const navigate = useNavigate();
  const actionData = useActionData();

  // const handleChange = (e) => {
  //     const {name, value} = e.target;

  //     if(name === "username") setUsername(value);
  //     else if(name === "password") setPassword(value);
  // }

  // As we have Context API with reducer this is the way:
  const centralState = useContext(AuthContext);
  const { dispatch } = centralState;

  useEffect(() => {
    if (actionData?.data) {
      dispatch({ type: types.LOGIN, payload: actionData.data });
      navigate("/");
    }
  }, [actionData, dispatch, navigate]);

  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const payload = {
  //         username,
  //         password
  //     }

  //     try {
  //         const response = await login(payload);
  //         dispatch({type: types.LOGIN, payload: response })
  //         // console.log(response);
  //         // await console.log(centralState);
  //         navigate("/")
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  return (
    <div
      className="bg-dark text-light p-4 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container className="border p-5 rounded">
        <h1 className="text-center">LOGIN TO YOUR ACCOUNT</h1>
        <RouterForm
          method="post"
          className="mt-5"
          // onSubmit={handleSubmit}
        >
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              autoComplete="username"
              name="username"
              //   value={username}
              //   onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your password"
              autoComplete="password"
              name="password"
              //   value={password}
              //   onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="danger" className="w-100 mt-2">
            LOGIN
          </Button>
        </RouterForm>
      </Container>
    </div>
  );
}
