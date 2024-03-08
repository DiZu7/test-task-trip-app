import React, { useState } from 'react';
import Modal from 'react-modal';

import iconsSprite from '../../../../../../images/icons.svg';
import './assets/index.scss';

import AddTripForm from '../AddTripForm';

const AddTripButton = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="trip-forecast__add-trip-btn">
        <p>+</p>
        <p>Add trip</p>
      </button>
      <Modal isOpen={modalIsOpen} shouldCloseOnEsc={true} contentClassName="modal">
        <button className="modal-btn" onClick={closeModal}>
          <svg className="modal-btn-icon" width="20" height="20">
            <use href={`${iconsSprite}#icon-close`}></use>
          </svg>
        </button>
        <AddTripForm />
      </Modal>
    </div>
  );
};

export default AddTripButton;
