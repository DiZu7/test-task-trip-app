import React, { useEffect, useState } from 'react';
import iconsSprite from './images/icons.svg';
import TripList from './features/trip/components/TripList';
import AddTripButton from './features/trip/components/AddTrip/components/AddTripButton';
import { tripStorage } from './features/trip/storage/TripStorage';
import ForecastToday from './features/weather/components/forecast-today';
import ForecastTrip from './features/weather/components/forecast-trip';

const App = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  useEffect(() => {
    setSelectedTrip(tripStorage.getMyTrips()[0]);
  }, []);

  return (
    selectedTrip !== null && (
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
            <TripList selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} />
            <AddTripButton />
          </div>

          <ForecastTrip selectedTrip={selectedTrip} />
        </div>
        <ForecastToday selectedTrip={selectedTrip} />
      </div>
    )
  );
};

export default App;
