// root reducer

import { combineReducers } from 'redux'
// reducers
//import coaching from './coaching/reducers'
import timeshift from './Timeshift'

const rootApp = combineReducers({
  timeshift,
})

export default rootApp

export type RootState = ReturnType<typeof rootApp>