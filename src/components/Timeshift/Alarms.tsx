import React, {useState} from "react";
import { connect } from 'react-redux'
import { IAlarmItem, addAlarm, editAlarm, deleteAlarm, toggleAlarm } from "../../store/Alarms";
import { RootState } from "../../store/rootReducer";
import { AlarmItem } from "./components/AlarmItem";
import { AddAlarmForm } from "./components/AddAlarmForm";
import uuidv4 from 'uuid'

interface AlarmsProps {
  alarms: IAlarmItem[],
  errors: any,
  addAlarm(newAlarm: IAlarmItem): void
  editAlarm(alarm: IAlarmItem, id: string): void
  deleteAlarm(id: string): void
  toggleAlarm(id: string): void
}

export const TS_AlarmsUI: React.FC<AlarmsProps> = ({
  alarms,
  errors,
  addAlarm,
  editAlarm,
  deleteAlarm,
  toggleAlarm,
}) => {
  const [open, setOpen] = useState<boolean>(true)
  const [adding, setAdding] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)

  const toggleHeaderOpen = () => {
    setOpen(!open)
  }

  const toggleActive = (id: string) => {
    // call redux to toggle active alarm
    toggleAlarm(id)
  }
  
  const handleAddAlarm = () => {
    // add alarm, form has to pop up
    setAdding(!adding)
  }
  const handleSubmitAddAlarm = (alarmData: any) => {
    const newAlarm = {
      id: uuidv4(),
      name: alarmData.name,
      daysInactive: alarmData.daysInactive, // defaults to none (empty array)
      active: alarmData.active, // defaults to true
      preset: alarmData.preset, // defaults to none (null)
    }
    addAlarm(newAlarm)
    setAdding(false)
  }

  return (
    <section className="alarms-container" id="alarms-section">
      <header className="alarms-toggle section-header"
        onClick={toggleHeaderOpen}>
        <h3 className="alarms-header">Alarms</h3>
      </header>
      {open && (
        <div id="ts-alarms">

          {/* List of Alarms */}
          <div className="alarms-container">
            {alarms.map((alarm, index) => (
              <AlarmItem
              key={index}
              alarm={alarm}
              toggleActive={toggleActive}
              editAlarm={editAlarm}
              />
              ))}

            {alarms.length < 1 && (
              <div style={{textAlign:'center',padding:15}}>
                <p>You haven't set any alarms yet</p>
              </div>
            )}

            {/* Add Alarm Form */}
            {adding && <AddAlarmForm addForm={handleSubmitAddAlarm} />}

            {/* Add Alarm Button */}
            <div className="save-wrapper" style={{textAlign:'center'}}>
            <h3 style={{paddingLeft:15,paddingRight:15, marginBottom:10, width:'auto', marginLeft:0,marginRight:0,display:'inline-block'}}
              onClick={handleAddAlarm}>
              Create</h3>
          </div>
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  alarms: state.alarms.alarms,
  errors: state.alarms.errors
})

export const TS_Alarms = connect(
  mapStateToProps,
  { addAlarm, editAlarm, deleteAlarm, toggleAlarm }
)(TS_AlarmsUI)