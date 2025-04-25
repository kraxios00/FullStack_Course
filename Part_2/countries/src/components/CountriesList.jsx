const CountriesList = ({ countries, onCountryClick }) => {
    if (!countries || countries.length === 0) {
        return <p>No countries found</p>
    }

    if (countries && countries.length > 10) {
        return <p>Too many matches, please be more specific</p>
    }

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name.common}>
                    <span>{country.name.common}</span>
                    <button onClick={() => onCountryClick(country)}>Show</button>
                </li>
            ))}
        </ul>
    )
}
export default CountriesList