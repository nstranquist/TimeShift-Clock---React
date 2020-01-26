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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  // Fullscreen
  useEffect(() => {
    // fullscreenListener()
    updateClock()
  }, [])

  const handleFullscreenClick = () => {
    const tsclockSection = document.getElementById("timeshift-clock");
    // const btnFullscreen = document.getElementById("btn-fullscreen");

    // const elem = document.documentElement; //document element
    // btnFullscreen!.addEventListener("click", function() {
    if(isFullscreen) {
      // close fullscreen
      document.exitFullscreen()
      setIsFullscreen(false)
    }
    else {
      tsclockSection?.requestFullscreen()
      setIsFullscreen(true)
    }
    
    // if (elem.re) {
    //     tsclockSection!.requestFullscreen();
    //     tsclockSection!.classList.toggle("fullscreen-mode");
    //   }
    //   else {
    //     document.exitFullscreen();
    //   }
    // });
  }

  const updateClock = () => {
    clearInterval()
    setInterval(() => {
      setTime(new Date())
    }, 995)
  }

  // function runTimer() {
  //   const date = new Date();
  //   let h = date.getHours();
  //   let m = date.getMinutes();
  //   let s = date.getSeconds();
  //   //let ampm = "am";
  
  //   if (h > 12) {
  //       h -= 12;
  //       //ampm = "pm";
  //   } else if (h === 0)
  //       h = 12;
  
  //   m = (m < 10) ? "0" + m : m;
  //   s = (s < 10) ? "0" + s : s;
  
  //   const time = h + ":" + m + ":" + s; //ommitted ampm on purpose
  //   //$('#clock').innerText=time;
  //   tsclock.innerText = time;  //optimized
  //   //$('#ampm').innerText=ampm;    
  // }

  return (
    <section id="timeshift-clock">
      <div id="ts-clock-time" className="text-center">
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </div>
      <div id="btn-fullscreen" onClick={handleFullscreenClick}>
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