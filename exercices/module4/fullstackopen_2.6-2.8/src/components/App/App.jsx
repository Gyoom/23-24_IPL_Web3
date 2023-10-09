import { useState, useEffect } from 'react'
import personService from 'services/persons'

import Filter from 'components/Filter/Filter'
import PersonForm from 'components/PersonForm/PersonForm'
import Persons from 'components/Persons/Persons'


const App = () => {
  const [persons, setPersons] = useState([])

  const [filterValue, setFilterValue] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialsPersons => {
        setPersons(initialsPersons)
      })
  }

  useEffect(hook, [])


  return (
    <div>
      <h2>Phonebook</h2>

        <Filter filterValue={filterValue} setFilterValue= {setFilterValue}/>
        <PersonForm persons={persons} setPersons={setPersons}/>     
        <Persons persons= {filterValue != '' ? persons.filter(person => person.name === filterValue) : persons} setPersons={setPersons}/>   
    </div>
  )
}

export default App
