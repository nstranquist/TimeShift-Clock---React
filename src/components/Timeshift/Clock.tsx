import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import { RootState } from "../../store/rootReducer";
import { setTime } from '../../store/Timeshift'

interface ClockProps {
  time: Date
  activePreset: number | null
  setTime(time: Date): void
}

// TODO: pass time in from props
export const TS_ClockUI: React.FC<ClockProps> = ({
  time,
  activePreset,
  setTime,
}) => {
  // Fullscreen
  useEffect(() => {
    fullscreenListener()
    updateClock()
  }, [])

  const fullscreenListener = () => {
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
  }

  const updateClock = () => {
    clearInterval()
    setInterval(() => {
      setTime(new Date())
    }, 995)
  }

  return (
    <section id="timeshift-clock">
      <div id="ts-clock-time" className="text-center">
      </div>
      <div>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
      <div id="btn-fullscreen">
        Fullscreen: [X]
      </div>
      <div className="active-presets">Active: [none]</div>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  time: state.timeshift.time,
  activePreset: state.timeshift.preset
})

export const TS_Clock = connect(
  mapStateToProps,
  { setTime }
)(TS_ClockUI)