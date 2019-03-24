import React from 'react';
//import { Field, reduxForm } from 'redux-form';
import JobSummaryContainer from './components/JobSummaryContainer';
import JobShiftContainer from './components/JobShiftContainer';
import LocationContainer from './components/LocationContainer';
import BranchContainer from './components/BranchContainer';
import NavBarJob from '../common/navbar/NavBarJob';

const handleSubmitYes = (e) => {
  e.preventDefault();
  // send action to reducers to accept job
  console.log('handle submit Yes btn clicked');
};

const handleSubmitNo = (e) => {
  e.preventDefault();
  // send action to reducers to decline job and remove from list
  console.log('handle submit No btn clicked');
};

const JobComponent = (props) => {
  //  console.log('props of Job component is ', props);
  const {
    company,
    title,
    wagePerHourInCents,
    shifts,
    branch,
    branchPhoneNumber
  } = props.jobsData;
  //console.log(branch);
  return (
    <form>
      <div className="JobsAvailable">
        <NavBarJob />
        <JobSummaryContainer
          company={company}
          title={title}
          wagePerHourInCents={wagePerHourInCents}
          shifts={shifts}
        />
        <JobShiftContainer shifts={shifts} />
        <hr />
        <LocationContainer company={company} />
        <hr />
        <BranchContainer
          branch={branch}
          branchPhoneNumber={branchPhoneNumber}
        />
        <hr />
        <div className="JobsAvailable__NoTakeJobButton">
          <a
            href="/"
            className="waves-effect waves-light blue btn left"
            onClick={handleSubmitNo}
          >
            NO THANKS
          </a>
          <a
            href="/"
            className="waves-effect waves-light blue btn right"
            onClick={handleSubmitYes}
          >
            I'LL TAKE IT
          </a>
        </div>
      </div>
    </form>
  );
};

export default JobComponent;
