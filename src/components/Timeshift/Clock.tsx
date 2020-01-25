import React, { useState, useEffect } from "react";

export const TS_Clock = ({

}) => {
  const [time, setTime] = useState<Date>(new Date())

  return (
    <section id="timeshift-clock">
      <div id="ts-clock-time" className="text-center">{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
      <div id="btn-fullscreen">Fullscreen: [X]</div>
      <div className="active-presets">Active: [none]</div>
    </section>
  );
};
