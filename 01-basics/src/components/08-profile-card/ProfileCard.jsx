import profileCardStyles from "./profile-card.module.scss";
import profileCardImg from "../../assets/images/profile-card.jpg";

export default function ProfileCard(props) {
  console.log(props);

  const backgroundStyle = {
    backgroundImage: `url(${props.imgSrc || profileCardImg})`,
  };
  return (
    <div className={profileCardStyles.profileCardContainer}>
      <div
        className={profileCardStyles.profileCardHeader}
        style={backgroundStyle}
      ></div>
      <div className={profileCardStyles.cardBody}>
        <div className={profileCardStyles.avatar} style={backgroundStyle}></div>
        <h3 className={profileCardStyles.cardTitle}> {props.name} </h3>
        <h5 className={profileCardStyles.cardDescription}>{props.location}</h5>
        <div className={profileCardStyles.stats}>
          <div className={profileCardStyles.statisticsInfo}>
            <p>{props.shot}</p>
            <p>Shot</p>
          </div>
          <div className={profileCardStyles.statisticsInfo}>
            <p>{props.followers}</p>
            <p>Followers</p>
          </div>
          <div className={profileCardStyles.statisticsInfo}>
            <p>{props.following}</p>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}
