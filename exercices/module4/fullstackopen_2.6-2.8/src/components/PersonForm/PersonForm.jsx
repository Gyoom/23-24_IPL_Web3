import { useState } from 'react'
import personService from 'services/persons'

const PersonForm = ({persons, setPersons}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const handleNoteChange = (event) => {
        setNewName(event.target.value)
     }
   
     const handleNumberChange = (event) => {
       setNewNumber(event.target.value)
    }

    const addNote = (event) => {
        event.preventDefault()

        if (newName != '' && newNumber != '') {

          const currentPerson = persons.find(p => p.name == newName)
          
          if (currentPerson != null)
          {
            const response = confirm(currentPerson.name + " à déjà un numéro associé, voulez vous le remplacer ?");
            if (response)
            {
              personService.update(currentPerson.id, { name: currentPerson.name, number: newNumber })
                .then(returnedPerson => {
                  setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
                  setNewName('')
                  setNewNumber('')
                })
            }
          } 
          else
          {
            personService.create({ name: newName, number: newNumber })
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
            })
          }
        }
    }

    return (
        <form>
            <div>
            name: 
            <input 
                value={newName}
                onChange={handleNoteChange}
                placeholder='add a name ...'
            />
            </div>
            <div>
            phone number: 
            <input 
                value={newNumber}
                onChange={handleNumberChange}
                placeholder='add a phone number ...'
            />
            </div>
            <div>
            <button type="submit" onClick={addNote}>add</button>
            </div>
        </form>
    )
}

export default PersonForm