// root reducer

import { combineReducers } from 'redux'
// reducers
//import coaching from './coaching/reducers'
import timeshift from './Timeshift'
import log from './Log'

const rootApp = combineReducers({
  timeshift,
  log
})

export default rootApp

export type RootState = ReturnType<typeof rootApp>