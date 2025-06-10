import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/counter-slice";
import { toggleTheme } from "../store/theme-slice";

export default function HomePage() {
  // If you are going to use only one specific state you can use following:
  // const centralState = useSelector((state) => state.counter);

  // Central State Getter
  const centralState = useSelector((state) => state);
  console.log(centralState);

  // Central State Setter
  const dispatch = useDispatch();

  return (
    <Container>
      <h1 className="text-center text-danger my-3">REDUX</h1>
      <h2 className="text-center"> {centralState?.counter?.value} </h2>
      <ButtonGroup className="w-100 my-3">
        <Button
          onClick={() => dispatch(increment())}
          className="w-100"
          type="button"
          variant="info"
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch(decrement())}
          className="w-100"
          type="button"
          variant="primary"
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch(reset())}
          className="w-100"
          type="button"
          variant="success"
        >
          Reset
        </Button>
      </ButtonGroup>
      <h2 className="text-center my-5">{centralState?.theme?.value}</h2>
      <Button
        className="w-100"
        type="button"
        variant={centralState?.theme?.value}
        onClick={() => dispatch(toggleTheme())}
      >
        Change Theme
      </Button>
    </Container>
  );
}
