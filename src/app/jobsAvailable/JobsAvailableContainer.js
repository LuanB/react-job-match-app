import React, { Component } from 'react';
import JobComponent from './JobComponent';
import jobAPIData from './jobAPIData';
import './JobsAvailable.css';

//const jobAPIData = require('./jobAPIData.json');

export class JobsAvailableContainer extends Component {
  // state = {
  //   MockAPIJobs: [jobAPIData]
  // };

  render() {
    return (
      <div>
        <h1>JobsAvaContainer</h1>
        <JobComponent jobsData={jobAPIData} />
      </div>
    );
  }
}
export default JobsAvailableContainer;
