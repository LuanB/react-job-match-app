import React from 'react';
import moment from 'moment';

const JobShiftComponent = (props) => {
  const { shift } = props;
  const startDayTime = moment(shift.startDate).format('llll z');
  return <div className="JobShiftComponent__shift">{startDayTime}</div>;
};

export default JobShiftComponent;
