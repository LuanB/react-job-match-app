import React, { Component } from 'react';
import LocationComponent from './LocationComponent';

export class LocationContainer extends Component {
  render() {
    const { company } = this.props;
    const address = company.address;
    return (
      <div className="Location">
        <LocationComponent address={address} />
      </div>
    );
  }
}
export default LocationContainer;
