// Types
export interface TimeshiftState {
  time: Date
  active: boolean
  numbersActive: number[] // note: get the inactive numbers with selector
  preset: number | null
}

export interface setTime {
  readonly type: 'SET_TIME'
  time: Date
}
export interface setActive {
  readonly type: 'SET_ACTIVE'
  active: boolean
}
export interface setPreset {
  readonly type: 'SET_PRESET'
  preset: number | null
}

export type TimeshiftActionTypes =
  | setPreset
  | setTime
  | setActive


// Actions
export function setTime(time: Date) {  // for now, setTime() can be used to both update time every second or update time with active preset
  return {
    type: 'SET_TIME',
    time
  }
}

// Reducer
const initialState: TimeshiftState = {
  time: new Date(),
  active: false, // set to true later
  numbersActive: [],
  preset: null
}

export default (
  state=initialState,
  action: TimeshiftActionTypes
): TimeshiftState => {
  switch(action.type) {
    case 'SET_TIME':
      return {
        ...state,
        time: action.time
      }
    case 'SET_ACTIVE':
      return {
        ...state,
        active: action.active
      }
    case 'SET_PRESET':
      return {
        ...state,
        preset: action.preset
      }
    default:
      return state
  }
}