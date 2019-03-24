import React, { Component } from 'react';
import JobShiftComponent from './JobShiftComponent';

export class JobShiftContainer extends Component {
  render() {
    //console.log('shift props are ', this.props);
    const shifts = this.props.shifts;
    return (
      <div className="JobShift">
        <div className="JobShift__agreeAllDays">
          If you take this Job you are agreeing to work ALL DAYS
        </div>
        {shifts.map((shift, key) => (
          <div className="JobShift__shift" key={key}>
            <JobShiftComponent shift={shift} />
          </div>
        ))}
      </div>
    );
  }
}
export default JobShiftContainer;
