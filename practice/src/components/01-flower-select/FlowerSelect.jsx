import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { flowers } from "../../assets/flowers";
import { useState } from "react";
import { flowers2 } from "../../assets/flowers-2";

export const FlowerSelect = () => {
  // JS

  const flowersArray = [...flowers, ...flowers2];
  const [imgUrl, setImgUrl] = useState(
    "https://static.vecteezy.com/system/resources/previews/007/567/154/non_2x/select-image-icon-vector.jpg"
  );

  const flowerOptions = flowersArray.map((flower) => {
    return (
      <option key={flower.url} value={flower.name}>
        {flower.name}
      </option>
    );
  });

  const getImage = (event) => {
    const flowerName = event.target.value;

    if (!flowerName) {
      setImgUrl(
        "https://static.vecteezy.com/system/resources/previews/007/567/154/non_2x/select-image-icon-vector.jpg"
      );
      return;
    }

    const flowerImage = flowersArray.find(
      (flower) => flower.name === flowerName
    ).url;
    setImgUrl(flowerImage);
  };

  return (
    // JSX
    <Container>
      <h2 className="text-center text-primary my-3">Flower Select</h2>

      <section>
        <Card border="warning" className="mx-auto" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <select
                name="flowers"
                id="flowers"
                className="form-select border-warning"
                onChange={getImage}
              >
                <option value="">Please select a flower</option>
                {flowerOptions}
              </select>
            </Card.Title>
          </Card.Body>
          <Card.Img variant="bottom" src={imgUrl} />
        </Card>
      </section>
    </Container>
  );
};
