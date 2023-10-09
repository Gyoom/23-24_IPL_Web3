import personService from "services/persons"

import Person from "components/Persons/Person/Person"

const Persons = ({ persons, setPersons }) => {

    const deletePersonTo = (id) => {
        personService.remove(id).then(returnedPerson => {
            setPersons(persons.filter(p => p.id !== id))
        })
    }

    return (
        <div>
            <h2>Numbers</h2>
                <ul>
                {
                    persons.map(person => <Person key={person.id} person={person} deletePersonTo={deletePersonTo} />)
                }
                </ul>   
        </div>
    )

}

export default Persons