import React, { useEffect } from "react";
import "./app.css";
import useTimeZone from "../../hooks/useTimeZone";
export default function App() {
  const ref = React.useRef(null);
  const contentId = React.useRef("");
  const isMount = React.useRef(false);
  const { date, timeZones } = useTimeZone();
  useEffect(() => {
    console.log("content view loaded");
    if (!isMount.current) {
      const content = document.createElement("div");
      const containerID = `id_${Date.now().toString()}`;
      contentId.current = containerID;
      content.classList.add(containerID);
      document.querySelector("body").prepend(content);
      isMount.current = true;
    }
    if (ref.current && contentId.current) {
      console.dir(ref.current);
      document.querySelector(`.${contentId.current}`).innerHTML =
        ref.current.outerHTML;
    }
  }, [ref, timeZones, isMount, contentId, date]);
  console.log({ timeZones });

  return (
    <div className="test" ref={ref}>
      {timeZones.map((time,i) => (
        <p key={i}>
          {time.zone} {time.date.toFormat("HH:mm:ss")}
        </p>
      ))}
    </div>
  );
}
