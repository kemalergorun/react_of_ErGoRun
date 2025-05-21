import { useEffect, useState } from "react";
import digitalStyles from "./digital-clock-3.module.scss";
import moment from "moment";

export default function DigitalClock3() {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    // set interval:
    let intervalId = setInterval(() => {
      setDate(moment());
      console.log("interval started");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let hour = date.format("HH");
  let minute = date.format("mm");
  let second = date.format("ss");
  let monthDayYear = date.format("LL");
  let weekday = date.format("dddd");

  let timeOfTheDay = "MORNING";

  if (hour >= 12 && hour < 17) {
    timeOfTheDay = "AFTERNOON";
  } else if (hour >= 17 && hour < 20) {
    timeOfTheDay = "EVENING";
  } else if (hour >= 20) {
    timeOfTheDay = "NIGHT";
  }

  return (
    <div className={digitalStyles.digitalClock}>
      <div className={digitalStyles.time}>
        {hour}:{minute}:{second}
      </div>
      <div>
        <div>{monthDayYear}</div>
        <div>
          {weekday} {timeOfTheDay}
        </div>
      </div>
    </div>
  );
}
