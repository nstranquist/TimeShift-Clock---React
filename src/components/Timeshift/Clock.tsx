import React, { useState, useEffect } from "react";
// import {connect} from 'react-redux

// TODO: pass time in from props
export const TS_Clock = ({}) => {
  const [time, setTime] = useState<Date>(new Date());

  // Fullscreen
  useEffect(() => {
    const tsclockSection = document.getElementById("timeshift-clock");
    const btnFullscreen = document.getElementById("btn-fullscreen");

    const elem = document.documentElement; //document element
    btnFullscreen!.addEventListener("click", function() {
      if (elem.requestFullscreen) {
        tsclockSection!.requestFullscreen();
        tsclockSection!.classList.toggle("fullscreen-mode");
      }
      else {
        document.exitFullscreen();
      }
    });
  }, [])
  

  return (
    <section id="timeshift-clock">
      <div id="ts-clock-time" className="text-center">
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </div>
      <div id="btn-fullscreen">
        Fullscreen: [X]
      </div>
      <div className="active-presets">Active: [none]</div>
    </section>
  );
};
