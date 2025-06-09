import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { useContext, useReducer } from "react";
import { NavLink } from "react-router";
import { AuthContext, types } from "../store/auth-store";

// Initial State to send inside the useReducer hook
const initialState = {
  counter: 0,
  theme: "light",
};

// Action object will tell us what to do with the type sent from the dispatch function
function reducer(state, action) {
  console.log("State: ", state);
  console.log("Action: ", action);

  if (action.type === "increment_counter") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "change_theme") {
    return {
      ...state,
      theme: state.theme === "light" ? "dark" : "light",
    };
  }

  // If none matches, not to reset the state to null, we have to return the state, so we can keep using it.
  return state;
}

export default function HomePage() {
  // AUTH ====================================

  const centralState = useContext(AuthContext);
  const { state: authState, dispatch: authDispatch } = centralState;

  console.log(authDispatch, authState);

  const handleLogout = () => {
    authDispatch({ type: types.LOGOUT });
  };

  // =========================================

  // useReducer hook receives two arguments: first argument is the reducer function, and the second argument is the initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickCounter = () => {
    // Dispatch function receives an object as an argument, whatever is sent to dispatch will be matching with the action in the reducer function
    dispatch({ type: "increment_counter" });
  };

  const handleClickTheme = () => {
    dispatch({ type: "change_theme" });
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            {authState.isAuthenticated
              ? `Welcome Back ${authState?.user?.username}`
              : "Welcome Stranger"}
          </Navbar.Brand>
          <Nav>
            {authState.isAuthenticated ? (
              <Button type="button" variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h1 className="text-center text-danger mt-3">Home Page</h1>
        <ButtonGroup className="mt-3 w-100">
          <Button
            type="button"
            title="Increase counter"
            variant="success"
            className="w-50"
            onClick={handleClickCounter}
          >
            Increase Counter
          </Button>
          <Button
            type="button"
            title="Change Theme"
            variant="info"
            className="w-50"
            onClick={handleClickTheme}
          >
            Change Theme
          </Button>
        </ButtonGroup>
        <Alert className="mt-3">
          <p>Counter: {state?.counter} </p>
          <p>Theme: {state?.theme} </p>
        </Alert>
      </Container>
    </>
  );
}
