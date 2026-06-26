import { useState, useEffect } from "react"
import axios from "axios"

import Display from "./components/Display"

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [allData, setAllData] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setAllData(response.data)
        setAllCountries(response.data.map(country => country.name.common))
      })
  }, [])

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  let countryMatch = allCountries
    .filter(countries => 
      countries
        .toLowerCase()
        .includes(inputValue.toLowerCase()))  
  
  const handleMatch = (country) => {
    setMatches([country])
  }
  
  return (
    <div>
      <p>
        Find Countries: 
        <input value={inputValue} onChange={handleInputValue} /> 
      </p>
      <Display match={matches} onClick={handleMatch} allData={allData} inputValue={inputValue} allCountries={allCountries} countries={countryMatch} />
    </div>
  )
}

export default App