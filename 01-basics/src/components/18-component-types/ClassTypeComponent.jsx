import { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

export default class ClassTypeComponent extends Component {
  // State - Props
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      theme: "light",
    };
  }

  // Life Cycle Methods
  componentDidMount() {
    // console.log("ASYNC - CTC - componentDidMount");
  }

  // in componentDidUpdate method, there are two parameters: previous props and previous state
  componentDidUpdate(previousProps, previousState) {
    // console.log("ASYNC - CTC - componentDidUpdate");

    // console.log(previousProps, previousState);

    if (previousState.counter !== this.state.counter) {
      console.log("ASYNC - CTC - counter updated");
    }

    if (previousState.theme !== this.state.theme) {
      console.log("ASYNC - CTC - theme updated");
    }

    if (previousProps.hello !== this.props.hello) {
      console.log("ASYNC - CTC - Props updated");
    }
  }

  componentWillUnmount() {
    console.log("ASYNC - CTC - unmounting phase");
  }

  render() {
    // JavaScript Part

    const handleIncrement = () => {
      this.setState((previousState) => {
        return { counter: previousState.counter + 1 };
      });
    };

    const handleTheme = () => {
      this.setState((prevState) => {
        return {
          theme: prevState.theme === "light" ? "dark" : "light",
        };
      });
    };

    return (
      // JSX Part
      <Container className="mt-5">
        <h2 className="text-center text-warning">Class Type Component</h2>
        <Button variant="warning" className="w-100" onClick={handleIncrement}>
          Increment - {this.state.counter}
        </Button>
        <Button className="w-100 mt-1" variant="info" onClick={handleTheme}>
          Change Theme - {this.state.theme}
        </Button>
      </Container>
    );
  }
}
