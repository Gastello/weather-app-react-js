const WeatherWindSpeed = (props) => {
  let currentWindSpeed = props.weatherWindSpeed;

  console.log(currentWindSpeed);

  return (
    <div className="weather__wind-speed">
      Wind speed: {currentWindSpeed} km/hr
    </div>
  );
};
export default WeatherWindSpeed;
