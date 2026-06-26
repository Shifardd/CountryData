const Display = ({allData, inputValue, allCountries, countries}) => {
  if (allCountries.length === 0) {
    return (
      <div>
        Just a moment! Fetching country names...
      </div>
    )
  }

  if (allCountries.length !== 0 && inputValue === '') {
    return (
      <div>
        You can find countries now
      </div>
    )
  }

  if(countries.length > 10 && inputValue !== '') {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if(countries.length == 1) {
    const country = allData.find(country => country.name.common === countries[0])
    const allLanguages = Object.values(country.languages)

    console.log(country);
    return (
      <>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital.join(', ')}</p>  
        <p>Area {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {
            allLanguages.map(lang => <li>{lang}</li>)
          }
        </ul>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </>
    )
  }


  return (
    <>
      {countries.map(country => {
        return <div>{country}</div>
      })}
    </>
  )
}

export default Display