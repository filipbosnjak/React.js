import { useEffect, useState } from "react";
import { API_KEY } from "./ApiKey";

import "./App.css";
import "weather-icons/css/weather-icons.css";
import WeatherCard from "./WeatherCard";
import { connect } from "react-redux";

const App = (props) => {
  const { coordsFetch, getIcon } = props;

  const [data, setData] = useState(props.data.data);

  const [coords, setCoords] = useState({});

  //Getting coords
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
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
    if (props.data.data !== undefined && props.data.data.cod !== "404") {
      getIcon(props.data.data.weather[0].id);
    }
  }, [props.data.data, getIcon]);
  const { lat, long } = coords;

  const coordsUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;

  //setData(response.data); <- THIS IS A VERY BAD IDEA

  return (
    <div>
      {data ? (
        data.cod === 200 ? (
          <div className="App">
            <WeatherCard
              city={data.name}
              temp={data.main.temp}
              temp_min={data.main.temp_min}
              temp_max={data.main.temp_max}
              feel={data.main.feels_like}
              des={data.weather[0].main}
            />
          </div>
        ) : (
          <p className="App">404</p>
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
    getIcon: (iconId) => {
      dispatch({
        type: "GET_ICON",
        payload: iconId,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.weatherReducer,
    icon: state.iconReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
