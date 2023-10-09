
const Person = ({ person, deletePersonTo }) => {
    

    return (
        <li key={person.id}>
            {person.name} : {person.number}
            <button onClick={() => deletePersonTo(person.id)}>delete</button>
        </li>
    )
}

export default Person