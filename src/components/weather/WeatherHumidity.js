const WeatherHumidity = (props) => {
  let currentHumidity = props.weatherHumidity;

  console.log(currentHumidity);

  return <div className="weather__humidity">Humidity: {currentHumidity}%</div>;
};
export default WeatherHumidity;
