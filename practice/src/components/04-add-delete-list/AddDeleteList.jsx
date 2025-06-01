import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";

export default function AddDeleteList() {
  const inputRef = useRef(null);

  const [liItems, setLiItems] = useState([]);
  const [oldLiItems, setOldLiItems] = useState([]);
  const [display, setDisplay] = useState("d-none");
  const [display2, setDisplay2] = useState("d-none");

  const addItem = () => {
    let inputValue = inputRef.current.value;
    if (inputValue.trim()) {
      setLiItems([...liItems, inputValue]);
    }

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const clearItems = () => {
    setOldLiItems(liItems);
    setLiItems([]);
    setDisplay("d-flex");
    setTimeout(() => setDisplay("d-none"), 3000);
  };

  const undo = () => {
    setLiItems(oldLiItems);
    setDisplay("d-none");
    setDisplay2("d-flex");
    setTimeout(() => setDisplay2("d-none"), 3000);
  };

  const upItem = (i) => {
    if (i > 0) {
      let tempItems = [...liItems];
      tempItems.splice(i - 1, 0, liItems[i]);
      tempItems.splice(i + 1, 1);
      setLiItems(tempItems);
    }
  };

  const downItem = (i) => {
    if (i < liItems.length - 1) {
      let tempItems = [...liItems];
      tempItems.splice(i + 2, 0, liItems[i]);
      tempItems.splice(i, 1);
      setLiItems(tempItems);
    }
  };

  const deleteItem = (i) => {
    setOldLiItems(liItems);

    setLiItems(liItems.filter((item) => liItems.indexOf(item) != i));

    setDisplay("d-flex");
    setTimeout(() => setDisplay("d-none"), 3000);
  };

  return (
    <Container className="mt-5">
      <Container
        className={`d-flex align-items-center justify-content-center my-3 gap-3 ${display}`}
      >
        <h4 className="m-1">Operation is Completed</h4>
        <Button className="m-1" variant="outline-info" onClick={undo}>
          Undo the Operation
        </Button>
      </Container>

      <Container
        className={`d-flex justify-content-center align-items-center my-3 ${display2}`}
      >
        <h4>Undo Operation is successful!</h4>
      </Container>

      <Container className="d-flex gap-1 ">
        <input type="text" className="form-control" ref={inputRef} />
        <Button variant="warning" onClick={addItem}>
          Add
        </Button>
        <Button variant="danger" onClick={clearItems}>
          Clear
        </Button>
      </Container>

      <ul className="mt-3 border rounded m-3 p-3">
        {liItems.map((item, index) => (
          <li
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{item}</span>
            <Container className="text-end">
              <FaArrowAltCircleUp
                className="m-1 text-primary h4"
                onClick={() => upItem(index)}
              />
              <FaArrowAltCircleDown
                className="m-1 text-primary h4"
                onClick={() => downItem(index)}
              />
              <IoTrashBinSharp
                className="m-1 text-danger h4"
                onClick={() => deleteItem(index)}
              />
            </Container>
          </li>
        ))}
      </ul>
    </Container>
  );
}
