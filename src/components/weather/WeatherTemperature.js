const WeatherTemperature = (props) => {
  let currentTemperature = (props.weatherTemperature - 273.15).toFixed(1);

  console.log(currentTemperature);

  return (
    <div className="weather__temperature">
      {currentTemperature+"°C"}
    </div>
  );
};
export default WeatherTemperature;
