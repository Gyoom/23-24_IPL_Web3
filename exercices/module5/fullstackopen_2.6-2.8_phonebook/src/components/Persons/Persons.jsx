import Person from "components/Persons/Person/Person"
import { useContext } from "react"
import { Context as PersonsContext } from 'contexts/personsContext'

const Persons = () => {
    const { persons, personFilterValue } = useContext(PersonsContext)

    const filteredPersons = personFilterValue !== '' ? persons.filter(person => person.name.startsWith(personFilterValue)) : persons

    return (
        <div>
            <h2>Numbers</h2>
                <ul>
                {
                    filteredPersons.map(person => <Person key={person.id} person={person} />)
                }
                </ul>   
        </div>
    )

}

export default Persons