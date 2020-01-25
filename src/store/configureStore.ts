import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootApp from './rootReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
  }
}

const configureStore = () => {
  // Three args: 1) reducer, 2) preloaded state, 3) enhancer
  const store = createStore(
    rootApp,
    //persistedState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        : (f: any) => f
    ),
  )

  return store
}

export default configureStore