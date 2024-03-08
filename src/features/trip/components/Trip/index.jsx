import React from 'react';
import { DATE_FORMAT_DOT, getFormattedDate } from '../../../../common/utils/dateUtils';
import './assets/index.scss';
import { tripStorage } from '../../storage/TripStorage';

const Trip = ({ id, city, img, dateFrom, dateTo, selectedTrip, setSelectedTrip }) => {
  const handleClick = e => {
    const clickedCardId = e.target.closest('.card-trip').dataset.id;
    setSelectedTrip(tripStorage.getSelectedTrip(clickedCardId));
  };

  return (
    <li className="trip-forecast__trip-card card-trip" data-id={id} onClick={e => handleClick(e)}>
      <div className="card-trip__img">
        <img src={img} alt={city} width="150" height="150" />
      </div>
      <div className={`card-trip__body ${id === selectedTrip.id && 'is-active'}`}>
        <h4 className="card-trip__title">{city}</h4>
        <p className="card-trip__desc">
          {getFormattedDate(new Date(dateFrom), DATE_FORMAT_DOT)}-
          {getFormattedDate(new Date(dateTo), DATE_FORMAT_DOT)}
        </p>
      </div>
    </li>
  );
};

export default Trip;
