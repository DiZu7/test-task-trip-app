import React, { useEffect, useState } from 'react';
import { fetchTodayWeather } from '../../../../gateways/gateways';
import { dayOfWeek, getTimeToStartTrip, isNightTime } from '../../../../common/utils/dateUtils';
import weatherIcons from '../../../../images/weather-icons.svg';
import './assets/index.scss';

const ForecastToday = ({ selectedTrip }) => {
  const [todayWeather, setTodayWeather] = useState(null);
  useEffect(() => {
    fetchTodayWeather(selectedTrip.city).then(({ days }) => {
      setTodayWeather({
        temperature: days[0].temp,
        icon: days[0].icon,
        day: new Date(days[0].datetime).getDay(),
        sunrise: days[0].sunrise,
        sunset: days[0].sunset,
      });
    });
  }, [selectedTrip.city]);

  const [timer, setTimer] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(getTimeToStartTrip(selectedTrip.dateFrom));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTrip.city]);

  return (
    todayWeather !== null &&
    timer !== null && (
      <div
        className={`forecast-today  ${
          isNightTime(todayWeather.sunrise, todayWeather.sunset)
            ? 'forecast-today_night-background'
            : 'forecast-today_day-background'
        }`}
      >
        <h3 className="forecast-today__title">{dayOfWeek[todayWeather.day]}</h3>
        <p className="forecast-today__temp">
          <svg className="forecast-today__weather-icon" width="40" height="40">
            <use href={`${weatherIcons}#icon-${todayWeather.icon}`}></use>
          </svg>
          {todayWeather.temperature}
          <span className="forecast-today__temp-mnemo">&#x2103;</span>
        </p>
        <p className="forecast-today__city">{selectedTrip.city}</p>
        <ul className="forecast-today__timer">
          <li className="forecast-today__timer-item">
            <p className="forecast-today__timer-number">{timer.days}</p>
            <p className="forecast-today__timer-unit">days</p>
          </li>
          <li className="forecast-today__timer-item">
            <p className="forecast-today__timer-number">{timer.hours}</p>
            <p className="forecast-today__timer-unit">hours</p>
          </li>
          <li className="forecast-today__timer-item">
            <p className="forecast-today__timer-number">{timer.minutes}</p>
            <p className="forecast-today__timer-unit">minutes</p>
          </li>
          <li className="forecast-today__timer-item">
            <p className="forecast-today__timer-number">{timer.seconds}</p>
            <p className="forecast-today__timer-unit">seconds</p>
          </li>
        </ul>
      </div>
    )
  );
};

export default ForecastToday;
