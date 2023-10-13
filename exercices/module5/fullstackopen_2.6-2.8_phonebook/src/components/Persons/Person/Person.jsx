import { useContext } from "react"
import { Context as PersonsContext } from 'contexts/personsContext'


const Person = ({ person }) => {
    const { deletePersonTo } = useContext(PersonsContext)

    return (
        <li key={person.id}>
            <button onClick={() => deletePersonTo(person.id)}>delete</button>

            {" " + person.name} : {person.number}
        </li>
    )
}

export default Person