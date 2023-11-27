const WeatherSearchInput = (props) => {
  return (
    <input
      type="text"
      placeholder=""
      className="weather__input"
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    ></input>
  );
};
export default WeatherSearchInput;
