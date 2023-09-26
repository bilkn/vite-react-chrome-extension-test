import React from "react";
import { ITimezone } from "@root/src/shared/types/common.types";

function useAddTimeZoneLogic() {
  const [timezone, setTimezone] = React.useState<ITimezone | null>(null);

  const handleTimeZoneChange = (_e: any, timezone: any) => {
    const { value, text, utc: timezoneUTC } = timezone;
    const utc = text.match(/\(UTC(-|\+)?\d?\d?:?\d?\d?\)/)[0];
    setTimezone({ name: value, region: timezoneUTC[0], utc, date: null });
  };
  const handlers = { handleTimeZoneChange };
  return { handlers, timezone };
}

export default useAddTimeZoneLogic;
