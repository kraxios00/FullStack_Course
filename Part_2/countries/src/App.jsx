import { useState, useEffect } from "react"
import countriesService from "./service/countriesService"
import weatherService from "./service/weatherService"
import SearchBar from "./components/SearchBar"
import CountryDetails from "./components/CountryDetails"
import CountriesList from "./components/CountriesList"

const App = () => {

  const [countries, setCountries] = useState(null)
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState(null)
  const [search, setSearch] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])
  const [showCountry, setShowCountry] = useState(false)

  useEffect(() => {
    setLoading(true)
    countriesService
      .getAllCountries()
      .then((response) => {
        setCountries(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching countries:", error)
      })
  }
  , [])

  useEffect(() => {
    if (countries) {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
      search !== "" && setFilteredCountries(filtered)
    }
  }
  , [search, countries])

  useEffect(() => {
    if (country && country.weather === undefined) {
      weatherService
        .getWeatherByCountry(country.latlng[0], country.latlng[1])
        .then((response) => {
          setCountry((prevCountry) => ({
            ...prevCountry,
            weather: response.data,
          }))
        })
        .catch((error) => {
          console.error("Error fetching weather:", error)
        })
    }
  }, [country])


  const onSearchChange = (e) => {
    setSearch(e)

    if (filteredCountries.length === 1) {
      setCountry(filteredCountries[0])
    }
  }

  const onCountryClick = (country) => {
    setCountry(country)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (!countries) {
    return <p>No countries found</p>
  }

  console.log(country)

  return (
    <>
      <SearchBar search={search} setSearch={onSearchChange}/>
      <CountriesList countries={filteredCountries} onCountryClick={onCountryClick}/>
      <CountryDetails country={country}/>
    </>
  )
}

export default App
