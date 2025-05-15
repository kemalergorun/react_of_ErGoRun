import { months } from "../../constants/months";
import { weekdays } from "../../constants/weekdays";
import digitalStyles from "./digital-clock-2.module.scss";

export default function DigitalClock2({ bgColor, textColor }) {
  // console.log(props);

  const date = new Date();

  const hour = date.getHours().toString().padStart(2, "0");
  // adds zero from the left if the hour is less than 2 character
  const minute = `${date.getMinutes()}`.padStart(2, "0");

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];

  let timeOfTheDay = "MORNING";

  if (hour >= 12 && hour < 17) {
    timeOfTheDay = "AFTERNOON";
  } else if (hour >= 17 && hour < 20) {
    timeOfTheDay = "EVENING";
  } else if (hour >= 20) {
    timeOfTheDay = "NIGHT";
  }

  const propsStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div style={propsStyles} className={digitalStyles.digitalClock}>
      <div className={digitalStyles.time}>
        {hour}:{minute}
      </div>
      <div>
        <div>
          {month} {day}, {year}
        </div>
        <div>
          {weekday} {timeOfTheDay}
        </div>
      </div>
    </div>
  );
}
