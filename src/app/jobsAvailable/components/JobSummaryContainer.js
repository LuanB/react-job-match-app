import React, { Component } from 'react';
import JobSummaryComponent from './JobSummaryComponent';

export class JobSummaryContainer extends Component {
  render() {
    console.log('props in jobsummary container is ', this.props);
    const { company, shifts, title, wagePerHourInCents } = this.props;
    const { logo, name } = company;
    const shiftDateFirstDay = shifts[0];
    const shiftDateLastDay = shifts[shifts.length - 1];
    return (
      <div>
        <h1>JobSummaryContainer</h1>
        <JobSummaryComponent
          logo={logo}
          title={title}
          name={name}
          wagePerHourInCents={wagePerHourInCents}
          shiftDateFirstDay={shiftDateFirstDay}
          shiftDateLastDay={shiftDateLastDay}
        />
      </div>
    );
  }
}
export default JobSummaryContainer;
