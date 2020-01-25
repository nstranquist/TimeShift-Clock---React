import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/components/Buttons.css';
import './styles/Globals.css';
import './styles/index.css'

const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
