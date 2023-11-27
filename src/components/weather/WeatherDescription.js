const WeatherDescription = (props) => {
  let currentDescription = props.weatherDescription;

  console.log(currentDescription);

  return <div className="weather__description">{currentDescription}</div>;
};
export default WeatherDescription;
