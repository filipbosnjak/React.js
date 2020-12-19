import { useState } from "react";
import "./App.css";
import { UseFetch } from "./hooks/UseFetch";
import { API_KEY } from "./ApiKey";

const App = () => {
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  const [city, setCity] = useState("London");

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const { data } = UseFetch(url);
  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
