import React, { useState } from 'react';
import { tripStorage } from '../../../../storage/TripStorage';
import './assets/index.scss';

const AddTripForm = () => {
  const handleSublit = event => {
    event.preventDefault();
    tripStorage.addTrip(new FormData(event.target));
  };

  return (
    <form className="form-add-trip" onSubmit={handleSublit}>
      <div className="form-add-trip__header">
        <h3 className="form-add-trip__title">Create trip</h3>
      </div>
      <div className="form-add-trip__main">
        <label className="form-add-trip__label" htmlFor="city">
          City
        </label>
        <select className="form-add-trip__input" name="city" defaultValue="default">
          <option value="default">Please select a city</option>
          <option value="berlin">Berlin</option>
          <option value="london">London</option>
          <option value="paris">Paris</option>
          <option value="washington">Washington</option>
          <option value="rome">Rome</option>
        </select>
        <label className="form-add-trip__label" htmlFor="dateFrom">
          Start date
        </label>
        <input
          className="form-add-trip__input"
          type="date"
          name="dateFrom"
          placeholder="Select date"
        />
        <label className="form-add-trip__label" htmlFor="dateTo">
          End date
        </label>

        <input
          className="form-add-trip__input"
          type="date"
          name="dateTo"
          placeholder="Select date"
        />
      </div>
      <div className="form-add-trip__footer">
        <div className="form-add-trip__btns">
          <button className="btn" type="reset">
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTripForm;
