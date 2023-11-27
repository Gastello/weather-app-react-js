const WeatherImage = (props) => {
  let weatherIconLink =
    `https://openweathermap.org/img/wn/` + props.weatherImage + "@2x.png";

  console.log(weatherIconLink);
  
  return (
    <div className="weather__image">
      <img src={weatherIconLink} alt="weatherIcon" />
    </div>
  );
};
export default WeatherImage;
