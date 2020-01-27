import React, {useState} from 'react'
import { IAlarmItem } from '../../../store/Alarms'

interface AlarmItemProps {
  alarm: IAlarmItem
  toggleActive(id: string): void
  editAlarm(alarm: IAlarmItem, id: string): void
}


// on click alarm name, turns to input and can be edited
// on click day of week, it automatically toggles it
// same for the active toggle

export const AlarmItem: React.FC<AlarmItemProps> = ({
  alarm: {
    id,
    name,
    daysInactive,
    active,
    preset
  },
  toggleActive,
  editAlarm
}) => {
  const [alarmName, setAlarmName] = useState<string>(name)
  const [editing, setEditing] = useState<boolean>(false)

  const handleNameClick = () => {
    setEditing(!editing)
  }
  
  const handleActiveToggle = (e: any) => {
    // call function
    toggleActive(id) // can use e.checked (or is it e.target.checked?)
  }

  const handleDaysClick = (e: any) => {
    console.log('days click event', e)
  }

  const handleNameChange = (e: any) => {
    setAlarmName(e.target.value)
  }
  const handleNameSubmit = (e: any) => {
    e.preventDefault()
    editAlarm({
      id,
      name: alarmName,
      daysInactive,
      active,
      preset
    }, id)
    setAlarmName('')
    setEditing(false)
  }

  return (
    <div className="alarm-item">
      <div className="left-container">
        {editing ? (
          <form onSubmit={handleNameSubmit}>
            <input type="text" value={alarmName} onChange={handleNameChange} />
            <button type="submit">update</button>
          </form>
        ) : (
          <div className="alarm-name" onClick={handleNameClick}>
            {name.length > 0 ? name : '(no name)'}</div>
        )}
        <div className="alarm-days"
          onClick={handleDaysClick}>
          <span>M</span>
          |
          <span>T</span>
          |W|R|F|S|S
        </div>
      </div>
      <div className="right-container">
        <div className="alarm-status">
          <input
            type="checkbox"
            className="toggle-switch"
            id="checkbox-2"
            checked={active}
            onChange={handleActiveToggle}
          />
          {/* <label for="checkbox-2"></label> */}
        </div>
      </div>
    </div>
  )
}
