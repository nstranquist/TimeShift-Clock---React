import React from "react";

import { TS_Alarms } from "../../components/Timeshift/Alarms";
import { TS_Log } from "../../components/Timeshift/Log";
import { TS_Options } from "../../components/Timeshift/Options";
import { TS_Clock } from "../../components/Timeshift/Clock";

// style imports (TODO: move away from css)
import '../../styles/Timeshift/Alarms.css'
import '../../styles/Timeshift/Clock.css'
import '../../styles/Timeshift/Log.css'
import '../../styles/Timeshift/Options.css'
import '../../styles/components/AlarmToggle.css'
import '../../styles/components/ActivePresets.css'


export const Timeshift = () => {
  return (
    <main className="main-content">
      <div id="app-container">
        <TS_Clock />
        <TS_Options />
        <TS_Alarms />
        <TS_Log />
      </div>
    </main>
  )
}
