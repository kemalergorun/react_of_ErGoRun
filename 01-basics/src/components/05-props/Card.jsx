import cardStyles from "./card.module.scss";

export default function Card({ desc, itemName, imgSrc }) {
  return (
    <div className={cardStyles.cardContainer}>
      <img src={imgSrc} alt="Coffee" className={cardStyles.cardImage} />
      <div className={cardStyles.innerContainer}>
        <h3 className={cardStyles.title}>{itemName}</h3>
        <p className={cardStyles.desc}>{desc}</p>
        <button className={cardStyles.button}>Add to Basket</button>
      </div>
    </div>
  );
}
