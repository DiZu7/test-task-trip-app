import React from 'react';
import iconsSprite from '../../images/icons.svg';
// import '../../styles/modal.scss';

const Modal = () => {
  return (
    <div className="backdrop is-hidden" data-modal>
      <div className="modal">
        <button className="modal-btn" type="button" data-modal-close>
          <svg className="modal-btn-icon" width="20" height="20">
            <use href={`${iconsSprite}#icon-close`}></use>
          </svg>
        </button>
        <form className="form-add-trip">
          <div className="form-add-trip-header">
            <h3 className="form-add-trip-title">Create trip</h3>
          </div>
          <div className="form-add-trip-main">
            <label className="form-add-trip-label" htmlFor="city">
              City
            </label>
            <select className="form-add-trip-input" name="city">
              <option value="" disabled selected>
                Please select a city
              </option>
              <option value="berlin">Berlin</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="washington">Washington</option>
              <option value="rome">Rome</option>
            </select>
            <label className="form-add-trip-label" htmlFor="startDate">
              Start date
            </label>
            <input
              className="form-add-trip-input"
              type="date"
              name="startDate"
              placeholder="Select date"
            />
            <label className="form-add-trip-label" htmlFor="endDate">
              End date
            </label>

            <input
              className="form-add-trip-input"
              type="date"
              name="endDate"
              placeholder="Select date"
            />
          </div>
          <div className="form-add-trip-footer">
            <div className="form-add-trip-btns">
              <button className="btn">Cancel</button>
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
