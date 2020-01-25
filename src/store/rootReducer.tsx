// root reducer

import { combineReducers } from 'redux'
// reducers
//import coaching from './coaching/reducers'

const rootApp = combineReducers({
  
})

export default rootApp

export type RootState = ReturnType<typeof rootApp>