// Alarms Types
export interface IAlarmItem {
  id: string
  name: string
  daysInactive: number[] // using 0-6 to represetn Mon-Sun
  active: boolean // if true, alarm will ring
  preset: string | null // if null, will work as regular clock. If preset, will search for that TimeShift preset and use
}

export interface AlarmsState {
  alarms: IAlarmItem[]
  errors: any
  //ringing: false
}

export interface addAlarm {
  readonly type: 'ADD_ALARM',
  newAlarm: IAlarmItem
}
export interface editAlarm {
  readonly type: 'EDIT_ALARM',
  alarm: IAlarmItem
  id: string
}
export interface deleteAlarm {
  readonly type: 'DELETE_ALARM',
  id: string
}
export interface toggleAlarm {
  readonly type: 'TOGGLE_ALARM',
  id: string
}

export type AlarmsActionTypes =
  | addAlarm
  | editAlarm
  | deleteAlarm
  | toggleAlarm
  | { readonly type:'SET_ERROR', error: any }


// Alarm Actions
export const addAlarm = (newAlarm: IAlarmItem) => {
  return {
    type: 'ADD_ALARM',
    newAlarm
  }
}
export const editAlarm = (alarm: IAlarmItem, id: string) => {
  return {
    type: 'EDIT_ALARM',
    alarm
  }
}
export const deleteAlarm = (id: string) => {
  return {
    type: 'DELETE_ALARM',
    id
  }
}
export const toggleAlarm = (id: string) => {
  return {
    type: 'TOGGLE_ALARM',
    id
  }
}


// Alarm Reducer
const initialAlarmState: AlarmsState = {
  alarms: [],
  errors: null
}

export default (
  state=initialAlarmState,
  action: AlarmsActionTypes
): AlarmsState => {
  switch(action.type) {
    case 'ADD_ALARM':
      return {
        ...state,
        alarms: state.alarms.concat(action.newAlarm)
      }
    case 'EDIT_ALARM':
      const newAlarms = state.alarms.map(alarm => {
        if(alarm.id === action.id) {
          alarm = action.alarm
        }
        return alarm
      })
      
      return {
        ...state,
        alarms: newAlarms
      }
    case 'DELETE_ALARM':
      return {
        ...state,
        alarms: state.alarms.filter(alarm => alarm.id !== action.id)
      }
    case 'TOGGLE_ALARM':
      const newAlarms2 = state.alarms.map(alarm => {
        if(alarm.id === action.id) {
          alarm.active = !alarm.active
        }
        return alarm
      })

      return {
        ...state,
        alarms: newAlarms2
      }
    // case 'SET_ERR0R':
    //   return {
    //     ...state,
    //     errors: action.error
    //   }
    default:
      return state
  }
}