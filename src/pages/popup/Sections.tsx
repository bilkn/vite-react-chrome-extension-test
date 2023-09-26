import React from "react";
import { useSection } from "@root/src/shared/hooks/useSection";
import Home from "./sections/Home/Home";
import AddTimeZone from "./sections/AddTimeZone/AddTimeZone";

function Sections() {
  const { section } = useSection();
  const renderSection = React.useMemo(
    () => ({
      home: <Home />,
      addTimezone: <AddTimeZone />,
    }),
    []
  );
  return renderSection[section];
}

export default Sections;
