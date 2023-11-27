const WeatherSearchButton = (props) => {
  return (
    <button
      className="weather__button"
      onClick={props.getWeatherDateByCityNameHandler}
    >
      go
    </button>
  );
};
export default WeatherSearchButton;
