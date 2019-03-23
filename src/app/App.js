import React, { Component } from 'react';
import JobsAvailableContainer from './jobsAvailable/JobsAvailableContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobsAvailableContainer />
      </div>
    );
  }
}

export default App;
