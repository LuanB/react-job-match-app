import React from 'react';
import moment from 'moment';
const JobSummaryComponent = (props) => {
  const {
    logo,
    title,
    name,
    wagePerHourInCents,
    shiftDateFirstDay,
    shiftDateLastDay
  } = props;

  //console.log(shiftDateFirstDay.startDate);

  const shiftDateFirstDayFormated = moment(shiftDateFirstDay.startDate).format(
    'ddd, MMM D'
  );

  const shiftDateLastDayFormated = moment(shiftDateLastDay.endDate).format(
    'ddd, MMM D'
  );
  const jobRateInDollars = wagePerHourInCents / 100;
  return (
    <div className="JobSummary">
      <div className="JobSummary__logo">
        <img
          className="responsive-img hide-on-small-only"
          src={logo}
          alt={name}
        />
      </div>
      <div className="JobSummary__title">{title} </div>
      <div className="JobSummary__name">{name}</div>
      <div className="JobSummary__jobRateInDollars">
        ${jobRateInDollars.toFixed(2)}/hour
      </div>
      <div className="JobSummary__shiftFirstLastDay">
        {shiftDateFirstDayFormated} -- {shiftDateLastDayFormated}
      </div>
    </div>
  );
};

export default JobSummaryComponent;
