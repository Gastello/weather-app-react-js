import React from "react";
import WeatherDescription from "./WeatherDescription";
import WeatherHumidity from "./WeatherHumidity";
import WeatherImage from "./WeatherImage";
import WeatherTemperature from "./WeatherTemperature";
import WeatherWindSpeed from "./WeatherWindSpeed";
import WeatherName from "./WeatherName";

const WeatherInfo = (props) => {
  return (
    <div className="weather__info">
      <WeatherImage weatherImage={props.weatherData.weather[0].icon} />
      <WeatherName weatherName={props.weatherData.name} />
      <WeatherDescription
        weatherDescription={props.weatherData.weather[0].description}
      />
      <WeatherTemperature weatherTemperature={props.weatherData.main.temp} />
      <WeatherHumidity weatherHumidity={props.weatherData.main.humidity} />
      <WeatherWindSpeed weatherWindSpeed={props.weatherData.wind.speed} />
    </div>
  );
};
export default WeatherInfo;
