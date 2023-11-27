import WeatherSearchButton from "./WeatherSearchButton";
import WeatherSearchInput from "./WeatherSearchInput";

const WeatherSearch = (props) => {
  return (
    <div className="weather__search">
      <WeatherSearchInput onChange={props.changeInputTextHandler} onKeyDown={props.getWeatherDateByCityNameHandler}/>
      <WeatherSearchButton onClick={props.getWeatherDateByCityNameHandler} />
    </div>
  );
};

export default WeatherSearch;
