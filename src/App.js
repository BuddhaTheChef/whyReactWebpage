import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import GettingStarted from './components/GettingStarted';
import CommandTips from './components/CommandTips';
import Jobs from './components/Jobs';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/GettingStarted" component={GettingStarted} />
          <Route path="/CommandTips" component={CommandTips} />
          <Route path="/Jobs" component={Jobs}/>
    </Switch>
    <Footer/>
    </div>
</Router>
  );
}

export default App;
