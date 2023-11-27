import WeatherSearch from "./components/search/WeatherSearch";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <>
      <div className="wrapper">
        <main className="page">
          <div className="container">
            <Weather />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
