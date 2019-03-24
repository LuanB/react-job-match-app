import React, { Component } from 'react';
import BranchComponent from './BranchComponent';

export class BranchContainer extends Component {
  render() {
    const { branch, branchPhoneNumber } = this.props;

    return (
      <div className="Branch">
        <BranchComponent
          branch={branch}
          branchPhoneNumber={branchPhoneNumber}
        />
      </div>
    );
  }
}
export default BranchContainer;
