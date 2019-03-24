import React, { Component } from 'react';
import JobSummaryComponent from './JobSummaryComponent';

export class JobSummaryContainer extends Component {
  render() {
    const { company, shifts, title, wagePerHourInCents } = this.props;
    const { logo, name } = company;
    const shiftDateFirstDay = shifts[0];
    const shiftDateLastDay = shifts[shifts.length - 1];
    return (
      <div>
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
