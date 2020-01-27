// root reducer

import { combineReducers } from 'redux'
// reducers
//import coaching from './coaching/reducers'
import timeshift from './Timeshift'
import log from './Log'
import alarms from './Alarms'

const rootApp = combineReducers({
  timeshift,
  log,
  alarms,
})

export default rootApp

export type RootState = ReturnType<typeof rootApp>