import { CITY_LIST } from '../constants';
import { v4 as uuidv4 } from 'uuid';

const MY_TRIP_LIST_KEY = 'myTripList';

const addTrip = tripFormData => {
  const myTrips = getMyTrips();

  const tripFormDataJson = Object.fromEntries(tripFormData.entries());

  const findCity = trip =>
    CITY_LIST.find(({ city }) => city.toLowerCase() === trip.city.toLowerCase());

  const chosenCity = findCity(tripFormDataJson);

  const newTrip = {
    id: uuidv4(),
    city: chosenCity.city,
    img: chosenCity.imgSrc,
    dateFrom: new Date(tripFormDataJson.dateFrom).getTime(),
    dateTo: new Date(tripFormDataJson.dateTo).getTime(),
  };

  myTrips.push(newTrip);

  localStorage.setItem(MY_TRIP_LIST_KEY, JSON.stringify(myTrips));
};

const getMyTrips = () => {
  const myTrips = localStorage.getItem(MY_TRIP_LIST_KEY);

  if (myTrips) {
    return JSON.parse(myTrips).sort((a, b) => a.dateFrom - b.dateFrom);
  }

  return getDefaultTrip();
};

const getDefaultTrip = () => {
  const currentDate = new Date();

  const defaultTrip = {
    id: uuidv4(),
    city: 'London',
    img: './images/london.jpeg',
    dateFrom: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 2,
    ).getTime(),
    dateTo: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 7,
    ).getTime(),
  };

  const defaultTrips = [defaultTrip];

  localStorage.setItem(MY_TRIP_LIST_KEY, JSON.stringify(defaultTrips));

  return defaultTrips;
};

const getSelectedTrip = clickedId => {
  const myTrips = localStorage.getItem(MY_TRIP_LIST_KEY);
  console.log(myTrips);
  const selectedTrip = JSON.parse(myTrips).find(trip => {
    console.log(trip.id);
    console.log(typeof trip.id);

    console.log(clickedId);
    console.log(typeof clickedId);
    console.log(trip.id === clickedId);
    console.log(trip);

    if (trip.id === clickedId) {
      return trip;
    }
  });
  console.log(selectedTrip);

  return selectedTrip;
};

export const tripStorage = {
  addTrip,
  getMyTrips,
  getSelectedTrip,
};

// export const cleanTrips = () => {
//   localStorage();
// };
