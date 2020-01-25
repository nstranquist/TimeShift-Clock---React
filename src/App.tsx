import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { TimeShiftPage } from './pages/Timeshift'
import { AboutPage } from './pages/About/About'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer';
import { Feedback } from './components/Feedback/Feedback';
import './styles/layout/PageLayout.css'
import { SocialIcons } from './components/SocialIcons/SocialIcons';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="page-layout">
        <Navbar />
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/" component={TimeShiftPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
          <Feedback />
          <Footer />
        </div>
      </div>
      <SocialIcons />
    </BrowserRouter>
  );
}

export default App
