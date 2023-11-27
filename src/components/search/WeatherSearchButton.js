const WeatherSearchButton = (props) => {
  return (
    <button
      className="weather__button"
      onClick={props.onClick}
    >
      go
    </button>
  );
};
export default WeatherSearchButton;
