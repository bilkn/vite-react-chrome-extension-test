import { useSection } from "@root/src/shared/hooks/useSection";
import timezoneJSON from "@root/src/shared/constants/timeZones.json";

function useAddTimeZoneLogic() {
  const { updateSection } = useSection();

  const handleAddNewTimezone = () => {
    updateSection("home");
  };
  const handlers = { handleAddNewTimezone };
  return { handlers, timezoneList: timezoneJSON };
}

export default useAddTimeZoneLogic;
