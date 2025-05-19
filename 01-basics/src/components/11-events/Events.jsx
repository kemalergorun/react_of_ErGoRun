import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Events() {
  // If you want to handle click without arguments, just define a function and put this function in the event handler called onClick (onEventname) to the HTML element in JSX part. Any type of functions are also possible to use in the event handlers.
  const handleClickWithoutArguments = () => {
    alert("Button with no argument is clicked.");
  };

  // If you want to handle click event without arguments but with events, you can use event object as a default parameter in the function.
  const handleClickWithoutArgumentsButWithEvents = (event) => {
    console.log(event);
    alert("The button that was clicked: ", event.target);
  };

  // If you want to handle click event with arguments, you can use callback functions and pass the arguments to the function.
  const handleClickWithArguments = (type) => {
    switch (type) {
      case "danger":
        alert("Danger button is clicked");
        break;
      case "info":
        alert("Info button is clicked");
        break;
      case "dark":
        alert("Dark button is clicked");
        break;
      default:
        alert("Unknown button is clicked");
        break;
    }
  };

  const handleClickWithArgumentsAndWithEvents = (event, type) => {
    switch (type) {
      case "danger":
        alert("Danger button is clicked");
        break;
      case "info":
        alert("Info button is clicked");
        break;
      case "dark":
        alert("Dark button is clicked");
        break;
      case "primary":
        alert("Primary button is clicked.");
        break;
      default:
        alert("Unknown button is clicked");
        break;
    }

    console.log("The button that was clicked: ", event.target);
  };

  return (
    <Container>
      <h2 className="text-center text-primary">Events</h2>
      <ButtonGroup className="w-100">
        <Button variant="danger" onClick={handleClickWithoutArguments}>
          Without Arguments
        </Button>
        <Button
          variant="info"
          onClick={handleClickWithoutArgumentsButWithEvents}
        >
          Without Arguments but with Events
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            handleClickWithArguments("dark");
          }}
        >
          With Arguments
        </Button>

        <Button
          variant="primary"
          onClick={(event) => {
            handleClickWithArgumentsAndWithEvents(event, "primary");
          }}
        >
          With Arguments and with Events
        </Button>
      </ButtonGroup>
    </Container>
  );
}
