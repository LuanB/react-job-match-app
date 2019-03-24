import React from 'react';

const LocationComponent = (props) => {
  const { address } = props;
  return (
    <div>
      <div className="Location__title">Location</div>
      <div className="Location__address">
        <p>
          <b>
            <a href="/" className="Location__link" target="_blank">
              {address}
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default LocationComponent;
