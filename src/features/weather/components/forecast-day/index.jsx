import React from 'react';
import { dayOfWeek } from '../../../../common/utils/dateUtils';
import weatherIcons from '../../../../images/weather-icons.svg';
import './assets/index.scss';

const ForecastDay = ({ datetime, tempmax, tempmin, icon }) => {
  return (
    <li className="forecast-week__list-item" key={datetime}>
      <p className="forecast-week__day">{dayOfWeek[new Date(datetime).getDay()]}</p>
      <svg className="forecast-week__weather-icon" width="40" height="40">
        <use href={`${weatherIcons}#icon-${icon}`}></use>
      </svg>
      <p className="forecast-week__temp">
        {tempmax}&deg;/{tempmin} &deg;
      </p>
    </li>
  );
};

export default ForecastDay;
