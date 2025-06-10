import Button from "react-bootstrap/Button";
import { useBearStore } from "../store/bear-store";

export default function Zustand() {
  const centralBears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removePopulation = useBearStore((state) => state.removeAllBears);
  return (
    <div>
      <h1 className="text-center text-success">Zustand</h1>
      <h2 className="text-center"> {centralBears} </h2>
      <Button
        className="w-50"
        type="button"
        variant="danger"
        onClick={increasePopulation}
      >
        Increase Bear
      </Button>
      <Button
        className="w-50"
        type="button"
        variant="primary"
        onClick={removePopulation}
      >
        Remove All Bears
      </Button>
    </div>
  );
}
