import React from "react";
import { DateTime } from "luxon";
import TIME_ZONES from "../constants/timeZones.json";

function useTimeZone() {
  const [date, setDate] = React.useState(DateTime.now());

  React.useEffect(() => {
    const updateTime = () => {
      const currentDate = DateTime.now();
      setDate(currentDate);
    };
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  const timeZones = TIME_ZONES.map((timeZone) => ({
    zone: timeZone.value,
    date: date.setZone(timeZone.utc[1] || timeZone.utc[0]),
  })).slice(0, 10);

  console.log({ date: date.second }, timeZones);
  return { date, timeZones };
}

export default useTimeZone;
