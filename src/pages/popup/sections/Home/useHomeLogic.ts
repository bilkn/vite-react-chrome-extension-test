import { useTimezone } from "@root/src/shared/hooks/useTimeZone";
import React from "react";

function useHomeLogic() {
  const { timeZones } = useTimezone();
  const [enableEdit, setEnableEdit] = React.useState(false);

  const toggleEdit = () => setEnableEdit(!enableEdit);
  const handlers = { toggleEdit };

  return { times: timeZones, enableEdit, handlers };
}

export default useHomeLogic;
