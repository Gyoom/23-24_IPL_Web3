import Filter from 'components/Filter/Filter'
import PersonForm from 'components/PersonForm/PersonForm'
import Persons from 'components/Persons/Persons'

const App = () => {

  // const hook = () => {
  //   personService
  //     .getAll()
  //     .then(initialsPersons => {
  //       setPersons(initialsPersons)
  //     })
  // }

  // useEffect(hook, [])


  return (
    <div>
      <h2>Phonebook</h2>

        <Filter />
        <PersonForm />     
        <Persons />   
    </div>
  )
}

export default App
