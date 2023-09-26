import React from "react";
import { DateTime } from "luxon";
import { ITimezone } from "../types/common.types";
import { useSection } from "./useSection";
import { useLocalStorage } from "usehooks-ts";

interface TimezoneHandlers {
  handleAddNewTimezone: (timezone: ITimezone) => void;
  handleRemoveTimezone: (timezone: ITimezone) => void;
}

const TimezoneContext = React.createContext<{
  timeZones: ITimezone[];
  handlers: TimezoneHandlers;
} | null>(null);

function TimezoneProvider(props: { children: JSX.Element | JSX.Element[] }) {
  const [date, setDate] = React.useState(DateTime.now());
  const [timezones, setTimezones] = useLocalStorage("timezones", []);

  const { updateSection } = useSection();

  React.useEffect(() => {
    const updateTime = () => {
      const currentDate = DateTime.now();
      setDate(currentDate);
    };
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddNewTimezone = (timezone: ITimezone) => {
    const updatedTimezones = [...timezones, timezone];
    setTimezones(updatedTimezones);
    updateSection("home");
  };

  const handleRemoveTimezone = (timezone: ITimezone) => {
    const filteredTimezones = timeZones.filter(
      (currentTZ) => currentTZ.name !== timezone.name
    );
    setTimezones(filteredTimezones);
    updateSection("home");
  };

  const timeZones = React.useMemo(
    () =>
      timezones
        .map((timeZone: ITimezone) => ({
          ...timeZone,
          date: date.setZone(timeZone.region),
        }))
        .slice(0, 10),
    [date]
  );

  const handlers = { handleAddNewTimezone, handleRemoveTimezone };

  return (
    <TimezoneContext.Provider value={{ timeZones, handlers }} {...props} />
  );
}

const useTimezone = () => React.useContext(TimezoneContext);

export { TimezoneProvider, useTimezone };
