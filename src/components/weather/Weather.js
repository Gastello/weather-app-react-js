import WeatherSearch from "../search/WeatherSearch";
import WeatherInfo from "./WeatherInfo";
import { useState } from "react";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");
  const apiKey = "0d411bdca7b7fe9307c2d2e0f6ceb81f";

  const getWeatherDateByCityNameHandler = async () => {
    const weatherApiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&appid=${apiKey}`;
    fetch(weatherApiLink)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else return {};
      })
      .then((response) => {
        console.log(response)
        setWeatherData(response);
      });
  };

  const changeInputTextHandler = (e) => {
    setCityName(e.target.value);
  };
  return (
    <div className="weather">
      <WeatherSearch
        getWeatherDateByCityNameHandler={getWeatherDateByCityNameHandler}
        changeInputTextHandler={changeInputTextHandler}
      />
      {!!Object.keys(weatherData).length && (
        <WeatherInfo weatherData={weatherData} />
      )}
    </div>
  );
};
export default Weather;
