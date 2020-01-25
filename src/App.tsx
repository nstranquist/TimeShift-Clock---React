import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { TimeShiftPage } from './pages/Timeshift'
import { AboutPage } from './pages/About/About'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/" component={TimeShiftPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
