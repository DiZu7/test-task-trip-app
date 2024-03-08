export const DATE_FORMAT_DOT = '${day}.${month}.${year}';
export const DATE_FORMAT_DASH = '${year}-${month}-${day}';

export const getFormattedDate = (date, pattern) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return pattern.replace('${day}', day).replace('${month}', month).replace('${year}', year);
};

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

export const getTimeToStartTrip = selectedTripDateFrom =>
  convertMs(selectedTripDateFrom - new Date().getTime());

export const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const isNightTime = (sunrise, sunset) => {
  const now = new Date();
  const sunriseTime = new Date(now.toDateString() + ' ' + sunrise);
  const sunsetTime = new Date(now.toDateString() + ' ' + sunset);
  return now < sunriseTime || now >= sunsetTime;
};
