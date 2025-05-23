import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductCardItem({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ height: "150px" }} variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.productName}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
  );
}
