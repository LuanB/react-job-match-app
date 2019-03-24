import React from 'react';
import JobSummaryContainer from './components/JobSummaryContainer';
import JobShiftContainer from './components/JobShiftContainer';
import LocationContainer from './components/LocationContainer';
import BranchContainer from './components/BranchContainer';
import NavBarJob from '../common/navbar/NavBarJob';

const JobComponent = (props) => {
  console.log('props of Job component is ', props);
  const {
    company,
    title,
    name,
    wagePerHourInCents,
    shifts,
    branch,
    branchPhoneNumber
  } = props.jobsData;
  //console.log(branch);
  return (
    <div className="JobsAvailable">
      <div>JobComponent</div>
      <NavBarJob />
      <JobSummaryContainer
        company={company}
        title={title}
        wagePerHourInCents={wagePerHourInCents}
        shifts={shifts}
      />
      <JobShiftContainer shifts={shifts} />
      <LocationContainer company={company} />
      <BranchContainer branch={branch} branchPhoneNumber={branchPhoneNumber} />
    </div>
  );
};

export default JobComponent;
