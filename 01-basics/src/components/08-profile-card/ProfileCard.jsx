import profileCardStyles from "./profile-card.module.scss";
import profileCardImg from "../../assets/images/profile-card.jpg";

export default function ProfileCard() {
  const backgroundStyle = {
    backgroundImage: `url(${profileCardImg})`,
  };
  return (
    <div className={profileCardStyles.profileCardContainer}>
      <div
        className={profileCardStyles.profileCardHeader}
        style={backgroundStyle}
      ></div>
      <div className={profileCardStyles.cardBody}>
        <div className={profileCardStyles.avatar} style={backgroundStyle}></div>
        <h3 className={profileCardStyles.cardTitle}> Walker </h3>
        <h5 className={profileCardStyles.cardDescription}>
          Nashville, Tennessee
        </h5>
        <div className={profileCardStyles.stats}>
          <div className={profileCardStyles.statisticsInfo}>
            <p>2</p>
            <p>Shot</p>
          </div>
          <div className={profileCardStyles.statisticsInfo}>
            <p>234</p>
            <p>Followers</p>
          </div>
          <div className={profileCardStyles.statisticsInfo}>
            <p>327</p>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}
