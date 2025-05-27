import Button from "react-bootstrap/esm/Button";

export default function ChildComponent({ handleClick, handleTheme, theme }) {
  let increaseValue = 2;

  return (
    <>
      <Button
        className="w-100 my-3"
        variant="outline-primary"
        type="button"
        title="Increase counter"
        onClick={() => {
          handleClick(increaseValue);
        }}
      >
        Increase Button by {increaseValue}
      </Button>

      <Button
        className="w-100 my-3"
        variant={theme ? "success" : "danger"}
        type="button"
        title="Change theme"
        onClick={handleTheme}
      >
        Change Theme
      </Button>
    </>
  );
}
