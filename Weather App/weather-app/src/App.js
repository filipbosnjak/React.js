import { useEffect, useState, useMemo } from "react";
import { UseFetch } from "./hooks/UseFetch";
import { API_KEY } from "./ApiKey";

import "./App.css";
import "weather-icons/css/weather-icons.css";
import WeatherCard from "./WeatherCard";
import { connect } from "react-redux";

const App = (props) => {
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const { coordsFetch, cityFetch } = props;

  const [data, setData] = useState(props.data.data);

  const [weatherIcon, setWeatherIcon] = useState();

  console.log(props.data.data);

  const [coords, setCoords] = useState({});

  //Getting coords
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("called");
        setCoords({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      alert("Location disabled");
    }
  }, []);

  useEffect(() => {
    setData(props.data.data);
  }, [props.data.data]);
  const { lat, long } = coords;

  const coordsUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;

  const weatherIcons = {
    thunderstorm: "wi-thunderstorm",
    drizzle: "wi-sleet",
    rain: "wi-storm-showers",
    snow: "wi-snow",
    atmosphere: "wi-fog",
    clear: "wi-day-sunny",
    clouds: "wi-day-fog",
  };

  const getWeatherIcon = (weatherIcons, range) => {
    switch (true) {
      case range >= 200 && range < 232:
        return weatherIcons.thunderstorm;
        break;
      case range >= 300 && range <= 321:
        return weatherIcons.drizzle;
        break;
      case range >= 500 && range <= 521:
        return weatherIcons.rain;
        break;
      case range >= 600 && range <= 622:
        return weatherIcons.snow;
        break;
      case range >= 701 && range <= 781:
        return weatherIcons.atmosphere;
        break;
      case range === 800:
        return weatherIcons.clear;
        break;
      case range >= 801 && range <= 804:
        return weatherIcons.clouds;
        break;

      default:
        setWeatherIcon({ icon: weatherIcons.clouds });
    }
  };
  //setData(response.data); <- THIS IS A VERY BAD IDEA

  // const fetchData = async (coordsUrl) => {
  //   try {
  //     const response = await fetch(coordsUrl);
  //     const weatherData = await response.json();
  //     setData({
  //       data: weatherData,
  //       fetching: false,
  //     });
  //   } catch (error) {}
  // };

  // const reFetch = (cityNameUrl) => {
  //   UseFetch(cityNameUrl);
  // };
  return (
    <div>
      {data ? (
        data.cod == 200 ? (
          <div className="App">
            <WeatherCard
              city={data.name}
              temp={data.main.temp}
              temp_min={data.main.temp_min}
              temp_max={data.main.temp_max}
              feel={data.main.feels_like}
              des={data.weather[0].main}
              icon={() => getWeatherIcon(weatherIcons)}
            />
          </div>
        ) : (
          <p>404</p>
        )
      ) : (
        <div className="App">
          <button
            className="initialButton"
            onClick={() => {
              coordsFetch(coordsUrl);
            }}
          >
            Get weather data
          </button>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    coordsFetch: (url) => {
      fetch(url)
        .then((data) => data.json())
        .then((res) => {
          dispatch({
            type: "COORDS_URL",
            payload: {
              data: res,
              fetching: false,
            },
          });
        })
        .catch((err) => console.log(err));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
