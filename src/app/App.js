import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import JobsAvailableContainer from './jobsAvailable/JobsAvailableContainer';
import NavBar from './common/navbar/NavBar';
import HomeContainer from '../app/home/HomeContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/jobsavailable" component={JobsAvailableContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
