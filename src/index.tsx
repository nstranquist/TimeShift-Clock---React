import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/Globals.css';
import './styles/Buttons.css';
import './styles/SocialIcons.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
