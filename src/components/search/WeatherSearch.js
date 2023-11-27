import WeatherSearchButton from "./WeatherSearchButton";
import WeatherSearchInput from "./WeatherSearchInput";

const WeatherSearch = (props) => {
  return (
    <div className="weather__search">
      <WeatherSearchInput
        changeInputTextHandler={props.changeInputTextHandler}
        enterPressedHandler={props.enterPressedHandler}
      />
      <WeatherSearchButton
        getWeatherDateByCityNameHandler={props.getWeatherDateByCityNameHandler}
      />
    </div>
  );
};

export default WeatherSearch;
