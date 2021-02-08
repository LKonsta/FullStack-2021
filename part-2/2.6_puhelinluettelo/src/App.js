import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  const [ currentFilter, setCurrentFilter] = useState('')

  const addPerson = (event) => {      
    console.log('button clicked', event.target)
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
    console.log(event.target.value)
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)  
  }
  
  const handleNameFilter = (event) => {
    console.log(event.target.value)
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