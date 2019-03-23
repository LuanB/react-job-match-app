import React, { Component } from 'react';
import BranchComponent from './BranchComponent';

export class BranchContainer extends Component {
  render() {
    return (
      <div>
        <h1>BranchContainer</h1>
        <BranchComponent />
      </div>
    );
  }
}
export default BranchContainer;
