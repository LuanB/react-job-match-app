import React from 'react';
import JobSummaryContainer from './components/JobSummaryContainer';
import JobShiftContainer from './components/JobShiftContainer';
import LocationContainer from './components/LocationContainer';
import BranchContainer from './components/BranchContainer';

const JobComponent = (props) => {
  return (
    <div>
      <div>JobComponent</div>
      <JobSummaryContainer />
      <JobShiftContainer />
      <LocationContainer />
      <BranchContainer />
    </div>
  );
};

export default JobComponent;
