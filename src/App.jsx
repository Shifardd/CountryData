import { useState, useEffect } from "react"
import axios from "axios"

import Display from "./components/Display"

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [allData, setAllData] = useState('')
  const [allCountries, setAllCountries] = useState([])
  // const [specificCountry, setSpecificCountry] = useState('')


  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setAllData(response.data)
        setAllCountries(response.data.map(country => country.name.common))
      })
  }, [])

  console.log(allData);
  
  

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const countryMatch = allCountries
    .filter(countries => 
      countries
        .toLowerCase()
        .includes(inputValue.toLowerCase()))  
  
  
  return (
    <div>
      <p>
        Find Countries: 
        <input value={inputValue} onChange={handleInputValue} /> 
      </p>
      <Display allData={allData} inputValue={inputValue} allCountries={allCountries} countries={countryMatch} />
    </div>
  )
}

export default App