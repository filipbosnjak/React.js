import React, { useState } from "react";
import { connect } from "react-redux";
import "weather-icons/css/weather-icons.css";
import { API_KEY } from "./ApiKey";

const WeatherCard = (props) => {
  const toCelsius = (temp) => {
    return temp - 273.1;
  };

  const { city, temp, temp_min, temp_max, feel, des, cityFetch } = props;
  console.log(props);
  const [newCity, setNewCity] = useState("");
  const cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${API_KEY}`;
  const handleChange = (e) => {
    e.preventDefault();
    setNewCity(e.target.value);
  };
  console.log(newCity);
  return (
    <div className="weatherCard">
      <div className="iconContainer">
        <i
          className={`wi ${props.icon.icon} icon ${
            props.icon.icon === "wi-day-sunny" ? "rotate" : "hover"
          }`}
        ></i>
      </div>
      <div className="content">
        <p className="location">
          Location: <br />
          {city}
        </p>
        <div>Change location:</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(cityUrl);
            cityFetch(cityUrl);
            setNewCity("");
          }}
        >
          <input
            type="text"
            placeholder="Enter city name..."
            value={newCity}
            className="input"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button type="submit" className="getButton">
            Get Weather
          </button>
        </form>
        <div className="temp">
          <div className="main">{Math.round(toCelsius(temp))} &deg;C</div>
          <div>Feels like: {Math.round(toCelsius(feel))}&deg;C</div>
        </div>
        <div className="description">{des}</div>
        Min: {Math.round(toCelsius(temp_min))}&deg;C Max:{" "}
        {Math.round(toCelsius(temp_max))}&deg;C
      </div>
      <div className="footer">
        Find the code on my
        <a
          className="link"
          href="https://github.com/filipbosnjak/React.js/tree/master/Weather%20App/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Github&nbsp;
        </a>
        page.
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.weatherReducer,
    icon: state.iconReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cityFetch: (url) => {
      fetch(url)
        .then((data) => data.json())
        .then((res) => {
          dispatch({
            type: "CITY_URL",
            payload: {
              data: res,
              fetching: false,
            },
          });
        })
        .catch((err) => console.log(err));
    },
    getIcon: (iconId) => {
      dispatch({
        type: "GET_ICON",
        payload: iconId,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
