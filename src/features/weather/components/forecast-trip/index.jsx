import React, { useEffect, useState } from 'react';
import './assets/index.scss';
import { fetchTripWeather } from '../../../../gateways/gateways';
import ForecastDay from '../forecast-day';
import { DATE_FORMAT_DASH, getFormattedDate } from '../../../../common/utils/dateUtils';

const ForecastTrip = ({ selectedTrip }) => {
  const [forecastTripList, setForecastTripList] = useState([]);

  useEffect(() => {
    fetchTripWeather(
      selectedTrip.city,
      getFormattedDate(new Date(selectedTrip.dateFrom), DATE_FORMAT_DASH),
      getFormattedDate(new Date(selectedTrip.dateTo), DATE_FORMAT_DASH),
    )
      .then(({ days }) =>
        days.map(day => {
          const selectedKeys = ['datetime', 'icon', 'tempmax', 'tempmin'];
          return Object.entries(day).reduce((acc, [key, value]) => {
            if (selectedKeys.includes(key)) {
              acc[key] = value;
            }
            return acc;
          }, {});
        }),
      )
      .then(data => setForecastTripList(data));
  }, [selectedTrip.city]);

  return (
    <div className="trip-forecast__forecast-week forecast-week">
      <h3 className="forecast-week__title">Week</h3>
      <ul className="forecast-week__list">
        {forecastTripList.map(forecastDay => (
          <ForecastDay {...forecastDay} key={forecastDay.datetime} />
        ))}
      </ul>
    </div>
  );
};

export default ForecastTrip;
