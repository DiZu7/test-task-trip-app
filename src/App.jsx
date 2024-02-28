import React from 'react';
import Modal from './components/Modal';
import iconsSprite from './images/icons.svg';
import berlin from './images/berlin.jpeg';
import london from './images/london.jpeg';
import rome from './images/rome.jpeg';

const App = () => {
  return (
    <>
      <div className="hero-container">
        <div className="trip-forecast">
          <h2 className="trip-forecast__title">
            <span className="trip-forecast__title-span">Weather</span> Forecast
          </h2>
          <form className="trip-forecast__search-form">
            <svg className="trip-forecast__search-form-icon" width="20" height="20">
              <use href={`${iconsSprite}#icon-search`}></use>
            </svg>
            <input
              className="trip-forecast__search-form-input"
              type="text"
              placeholder="Search your trip"
            />
          </form>

          <div className="trip-forecast__trip-cards-wrap">
            <ul className="trip-forecast__trip-cards">
              <li className="trip-forecast__trip-card card-trip">
                <div className="card-trip__img">
                  <img src={berlin} alt="Berlin" width="150" height="150" />
                </div>
                <div className="card-trip__body is-active">
                  <h4 className="card-trip__title">Berlin</h4>
                  <p className="card-trip__desc">14.07.2023-21.07.2023</p>
                </div>
              </li>
              <li className="trip-forecast__trip-card card-trip">
                <div className="card-trip__img">
                  <img
                    src={rome}
                    alt="Berlin"
                    width="150"
                    height="150"
                    //  width="125" height="125"
                  />
                </div>
                <div className="card-trip__body">
                  <h4 className="card-trip__title">Rome</h4>
                  <p className="card-trip__desc">14.08.2023-21.08.2023</p>
                </div>
              </li>
              <li className="trip-forecast__trip-card card-trip">
                <div className="card-trip__img">
                  <img
                    src={london}
                    alt="Berlin"
                    width="150"
                    height="150"

                    // width="125"
                    // height="125"
                  />
                </div>
                <div className="card-trip__body">
                  <h4 className="card-trip__title">London</h4>
                  <p className="card-trip__desc">14.09.2023-21.09.2023</p>
                </div>
              </li>
            </ul>
            <button className="trip-forecast__add-trip-btn" type="button" data-modal-open>
              <p>+</p>
              <p>Add trip</p>
            </button>
          </div>
          <div className="trip-forecast__forecast-week week-forecast">
            <h3 className="week-forecast__title">Week</h3>
            <ul className="week-forecast__list">
              <li className="week-forecast__list-item">
                <p className="week-forecast__day">Monday</p>
                <svg className="week-forecast__weather-icon" width="75" height="75">
                  <use href={`${iconsSprite}#icon-sun`}></use>
                </svg>
                <p className="week-forecast__temp">28/21</p>
              </li>
              <li className="week-forecast__list-item">
                <p className="week-forecast__day">Tuesday</p>
                <svg className="week-forecast__weather-icon" width="75" height="75">
                  <use href={`${iconsSprite}#icon-cloud-sun`}></use>
                </svg>
                <p className="week-forecast__temp">28/21</p>
              </li>
              <li className="week-forecast__list-item">
                <p className="week-forecast__day">Wednesday</p>
                <svg className="week-forecast__weather-icon" width="75" height="75">
                  <use href={`${iconsSprite}#icon-cloud`}></use>
                </svg>
                <p className="week-forecast__temp">28/21</p>
              </li>
              <li className="week-forecast__list-item">
                <p className="week-forecast__day">Thursday</p>
                <svg className="week-forecast__weather-icon" width="75" height="75">
                  <use href={`${iconsSprite}#icon-rain-sun`}></use>
                </svg>
                <p className="week-forecast__temp">28/21</p>
              </li>
              <li className="week-forecast__list-item">
                <p className="week-forecast__day">Friday</p>
                <svg className="week-forecast__weather-icon" width="75" height="75">
                  <use href={`${iconsSprite}#icon-rain`}></use>
                </svg>
                <p className="week-forecast__temp">28/21</p>
              </li>
              <li className="week-forecast__list-item">
                <p className="week-forecast__day">Saturday</p>
                <svg className="week-forecast__weather-icon" width="75" height="75">
                  <use href={`${iconsSprite}#icon-sun`}></use>
                </svg>
                <p className="week-forecast__temp">28/21</p>
              </li>
              <li className="week-forecast__list-item">
                <p className="week-forecast__day">Sunday</p>
                <svg className="week-forecast__weather-icon" width="75" height="75">
                  <use href={`${iconsSprite}#icon-sun`}></use>
                </svg>
                <p className="week-forecast__temp">28/21</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="forecast-today">
          <h3 className="forecast-today__title">Sunday</h3>

          <p className="forecast-today__temp">
            <svg className="forecast-today__weather-icon" width="75" height="75">
              <use href={`${iconsSprite}#icon-rain`}></use>
            </svg>
            24
            <span className="forecast-today__temp-mnemo">&#x2103;</span>
          </p>
          <p className="forecast-today__city">Berlin</p>
          <ul className="forecast-today__timer">
            <li className="forecast-today__timer-item">
              <p className="forecast-today__timer-number">30</p>
              <p className="forecast-today__timer-unit">days</p>
            </li>
            <li className="forecast-today__timer-item">
              <p className="forecast-today__timer-number">15</p>
              <p className="forecast-today__timer-unit">hours</p>
            </li>
            <li className="forecast-today__timer-item">
              <p className="forecast-today__timer-number">15</p>
              <p className="forecast-today__timer-unit">minutes</p>
            </li>
            <li className="forecast-today__timer-item">
              <p className="forecast-today__timer-number">30</p>
              <p className="forecast-today__timer-unit">seconds</p>
            </li>
          </ul>
        </div>
      </div>

      <Modal />
    </>
  );
};

export default App;
