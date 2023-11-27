const WeatherSearchInput = (props) => {
  return (
    <input
      type="text"
      placeholder=""
      className="weather__input"
      onChange={props.changeInputTextHandler}
      onKeyDown={props.enterPressedHandler}
    ></input>
  );
};
export default WeatherSearchInput;
