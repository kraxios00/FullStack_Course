const CountryDetails = ({ country }) => {
    const { name, capital, population, area, languages, flags, weather } = country || {}

    if (!country) {
        return <p>No country selected</p>
    }

  return (
    <div className="country-details">
      <h2>{`${name.official}`}</h2>
      <p>{`Capital: ${capital[0]}`}</p>
      <p>{`Area: ${area}`}</p>
      <ul>
        <li>{`Population: ${population}`}</li>
        <li>{`Languages: ${Object.values(languages).join(", ")}`}</li>
      </ul>
      <img src={flags.png} alt={`${name.official} flag`} />
      {weather && (
        <div className="weather-info">
          <h3>Weather in {capital[0]}</h3>
          <p>{`Temperature: ${weather.main.temp} °C`}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description} />
          <p>{`Humidity: ${weather.main.humidity} %`}</p>
          <p>{`Wind Speed: ${weather.wind.speed} m/s`}</p>
        </div>
      )}
    </div>
  )
}
export default CountryDetails