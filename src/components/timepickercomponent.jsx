import React, { useState } from "react";
import TimeKeeper from "react-timekeeper";

const Timepickercomponent = (props) => {
  const [time, setTime] = useState("12:34pm");

  return (
    <div>
      <TimeKeeper time={time} onChange={(data) => setTime(data.formatted12)} />
      <span>Time is {time}</span>
      {console.log("inside timecomp", props.locals)}
      {console.log("Im inside tp", props)}
    </div>
  );
};
export default Timepickercomponent;
