import React, { Component } from 'react';
import JobSummaryComponent from './JobSummaryComponent';

export class JobSummaryContainer extends Component {
  render() {
    return (
      <div>
        <h1>JobSummaryContainer</h1>
        <JobSummaryComponent />
      </div>
    );
  }
}
export default JobSummaryContainer;
