import { useState, useContext } from 'react'
import { Context as PersonsContext } from 'contexts/personsContext'

const PersonForm = () => {
    const { addPerson } = useContext(PersonsContext)

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const handleNoteChange = (event) => {
        setNewName(event.target.value)
     }
     const handleNumberChange = (event) => {
       setNewNumber(event.target.value)  
    }

    const submitHandle = () => {
      let bool = addPerson(newName, newNumber)
      if (bool) 
      {
        setNewName('')
        setNewNumber('')
      }
    } 

    return (
        <>
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
            <button type="submit" onClick={() => addPerson(newName, newNumber)}>add</button>
            </div>
        </>
    )
}

export default PersonForm