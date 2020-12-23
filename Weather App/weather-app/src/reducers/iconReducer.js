const weatherIcons = {
  thunderstorm: "wi-thunderstorm",
  drizzle: "wi-sleet",
  rain: "wi-storm-showers",
  snow: "wi-snow",
  atmosphere: "wi-fog",
  clear: "wi-day-sunny",
  clouds: "wi-day-fog",
};

const getWeatherIcon = (range) => {
  switch (true) {
    case range >= 200 && range < 232:
      return weatherIcons.thunderstorm;
    case range >= 300 && range <= 321:
      return weatherIcons.drizzle;
    case range >= 500 && range <= 521:
      return weatherIcons.rain;
    case range >= 600 && range <= 622:
      return weatherIcons.snow;
    case range >= 701 && range <= 781:
      return weatherIcons.atmosphere;
    case range === 800:
      return weatherIcons.clear;
    case range >= 801 && range <= 804:
      return weatherIcons.clouds;
    default:
      return weatherIcons.clear;
  }
};

const initialState = {};

export const iconReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ICON":
      return { icon: getWeatherIcon(action.payload) };
    default:
      return state;
  }
};
