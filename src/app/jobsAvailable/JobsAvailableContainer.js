import React, { Component } from 'react';
//import { Form } from 'redux-form';
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
        <JobComponent jobsData={jobAPIData} />
      </div>
    );
  }
}
export default JobsAvailableContainer;
