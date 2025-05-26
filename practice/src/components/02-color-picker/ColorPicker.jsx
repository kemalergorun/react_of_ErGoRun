import { useState } from "react";
import Card from "react-bootstrap/Card";

export const ColorPicker = () => {
  const [color, setColor] = useState("#000");

  const pickColor = (event) => {
    setColor(event.target.value);
  };

  let addMixBlend = {
    mixBlendMode: "difference",
  };

  return (
    <Card
      className="mx-auto my-3"
      style={{ width: "24rem", backgroundColor: color, color: "white" }}
    >
      <h2 className="text-center" style={addMixBlend}>
        Color Picker
      </h2>
      <h3 className="text-center" style={addMixBlend}>
        Selected Color: {color}
      </h3>
      <label
        htmlFor="color"
        className="form-control w-50 mx-auto text-center"
        style={addMixBlend}
      >
        Pick a color
      </label>
      <input
        type="color"
        id="color"
        className="m-3 w-50 mx-auto"
        onChange={pickColor}
      />
    </Card>
  );
};
