import Card from "./Card";

export default function CardContainer() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Card
        imgSrc="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        itemName="Chocolate"
        desc="Famous cacao of Brazil meets with Swiss experience."
      />

      <Card
        imgSrc="https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        itemName="Lemonade"
        desc="Made lemon and love."
      />

      <Card
        imgSrc="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        itemName="Burger"
        desc="Tasty burger"
      />
    </div>
  );
}
