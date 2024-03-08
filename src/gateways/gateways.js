export const fetchTodayWeather = city => {
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=2X5RKRMF2KZS9K3WGZ5YRFXJD&contentType=json`,
  )
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't display events");
      }
      return response.json();
    })
    .catch(() => {
      alert("Network Error. Can't display events");
    });
};

export const fetchTripWeather = (city, dateFrom, dateTo) => {
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${dateFrom}/${dateTo}?unitGroup=metric&include=days&key=2X5RKRMF2KZS9K3WGZ5YRFXJD&contentType=json`,
  )
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't display events");
      }
      return response.json();
    })
    .catch(() => {
      alert("Network Error. Can't display events");
    });
};
