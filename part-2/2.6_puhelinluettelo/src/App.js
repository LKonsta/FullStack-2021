import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length, 'notes')

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  const [ currentFilter, setCurrentFilter] = useState('')

  const addPerson = (event) => {
    var taken = 0
    persons.forEach(function(item,index,array) {
      if (newName === item.name) {
        taken = newName
      }
    })

     if (taken === 0) {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
  
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  
       
     } else {
      window.alert(newName + ' is already added to phonebook');
     }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)  
  }
  
  const handleNameFilter = (event) => {
    setCurrentFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter person={persons} filter={handleNameFilter} />

      <h3>Add a new</h3>

      <PersonForm handleName={handleNameChange} 
        handleNumber={handleNumberChange}
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={currentFilter}/>


    </div>
  )
}

const Persons = (props) => {
  return (
    <div>
      {props.persons.map(person => 
        <PersonListing key={person.id} person={person} filter={props.filter}/>
      )}
    </div>
  )
}

const PersonListing = (props) => {

  if (props.person.name.includes(props.filter)) {
    return (
      <div>
        <p> {props.person.name} {props.person.number}</p>
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

const Filter = (props) => {
  return (
    <div>
      <form>
        <div>
          filter shown with<input
          onChange={props.filter}/>
        </div>
      </form>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        <div>
          name: <input 
          value={props.newName}
          onChange={props.handleName}/>
        </div>
        <div>
          number: <input 
          value={props.newNumber}
          onChange={props.handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default App