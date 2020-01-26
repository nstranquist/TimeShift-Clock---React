// Log Types
export interface ILogItem {
  id: string
  title: string
  description: string
  date: Date | any // or timestamp?
}

export interface LogState {
  logs: ILogItem[]
  //errors, loading, etc
}
export interface AddLog {
  readonly type: 'ADD_LOG'
  newLog: ILogItem
}
export interface EditLog {
  readonly type: 'EDIT_LOG'
  newLog: ILogItem
  id: string
}
export interface DeleteLog {
  readonly type: 'DELETE_LOG'
  id: string
}

export type LogActionTypes =
  | AddLog
  | EditLog
  | DeleteLog


// Action Types
export const addLog = (newLog: ILogItem) => {
  // add log
  return {
    type: 'ADD_LOG',
    newLog
  }
}
export const editLog = (newLog: ILogItem, id: string) => {
  // edit log
  return {
    type: 'EDIT_LOG',
    newLog,
    id
  }
}
export const deleteLog = (id: string) => {
  // delete log
  return {
    type: 'DELETE_LOG',
    id
  }
}


// Reducer
const initialLogState: LogState = {
  logs: [],

}

export default (
  state=initialLogState,
  action: LogActionTypes
): LogState => {
  switch(action.type) {
    case 'ADD_LOG':
      return {
        ...state,
        logs: state.logs.concat(action.newLog)
      }
    case 'EDIT_LOG':
      const newLogs = state.logs.map(log => {
        if(log.id === action.id) {
          log = action.newLog
        }
        return log
      })
      console.log('newLogs in reducer:', newLogs)
      return {
        ...state,
        logs: newLogs
      }
    case 'DELETE_LOG':
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.id)
      }
    default:
      return state
  }
}