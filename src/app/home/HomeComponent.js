import React from 'react';
import { withRouter } from 'react-router-dom';

const HomeComponent = (props) => {
  const handleJobSearchClick = (props) => {
    props.history.push('/jobsavailable');
  };

  return (
    <div>
      <div>Home component</div>
      <button
        className="waves-effect waves-light btn blue"
        onClick={() => handleJobSearchClick(props)}
      >
        Search Jobs
      </button>
    </div>
  );
};

export default withRouter(HomeComponent);
