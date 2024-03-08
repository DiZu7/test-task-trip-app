import classNames from 'classnames';

export const setClassNamesCard = (clickedId, tripId) =>
  classNames('card-trip__body', {
    'is-active': clickedId === tripId,
  });
