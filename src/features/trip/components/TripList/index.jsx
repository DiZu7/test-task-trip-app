import React from 'react';
import { tripStorage } from '../../storage/TripStorage';

import './assets/index.scss';
import Trip from '../Trip';

const TripList = ({ selectedTrip, setSelectedTrip }) => {
  return (
    <ul className="trip-forecast__trip-cards">
      {tripStorage.getMyTrips().map(trip => (
        <Trip
          {...trip}
          key={trip.id}
          selectedTrip={selectedTrip}
          setSelectedTrip={setSelectedTrip}
        />
      ))}
    </ul>
  );
};

export default TripList;
