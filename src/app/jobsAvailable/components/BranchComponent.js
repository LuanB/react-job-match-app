import React from 'react';

const BranchComponent = (props) => {
  const { branch, branchPhoneNumber } = props;

  return (
    <div>
      <div className="Branch__title">Branch:</div>
      <div className="Branch__name">{branch}</div>
      <div className="Branch__phone">
        <p>
          <b>
            <a href="/" className="Branch__phonelink" target="_blank">
              {branchPhoneNumber}
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default BranchComponent;
