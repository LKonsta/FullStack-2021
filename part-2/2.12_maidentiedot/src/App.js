import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries] = useState([]) 
  const [ currentFilter, setCurrentFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  }, [])

  const handleNameFilter = (event) => {
    setCurrentFilter(event.target.value)
  }

  const shown = []
  countries.forEach(country => {
    if(country.name.includes(currentFilter)) {
      shown.push(country)
    }
  }
  )

  return (
    <div>
      <form>
        <div>
          find countries <input 
          onChange={handleNameFilter}/>
        </div>
      </form>      

      <div>
      <List shown={shown}/>
      </div>
    </div>
  );
}

const List = (props) => {
  if (props.shown.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else {
  return (
    <div>
      {props.shown.map(country => 
        <p>{country.name}</p>
      )}
      </div>
  )}
}

export default App
