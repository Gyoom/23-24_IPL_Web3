import React, { useState, useEffect } from "react";
import personService from "services/persons";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [ persons, setPersons] = useState([])
    const [ personFilterValue, setPersonFilterValue] = useState("")

    const hook = () => {
        personService
            .getAll()
            .then(initialsPersons => {
                setPersons(initialsPersons)
            })
    }

    useEffect(hook, [])


    const addPerson = (newName, newNumber) => {
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
                  return true;
                })
            }
            return false;
          } 
          else
          {
            personService.create({ name: newName, number: newNumber })
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              return true;
            })
          }
        }
        return false;
    }

    const deletePersonTo = (id) => {
        personService.remove(id).then(returnedPerson => {
            setPersons(persons.filter(p => p.id !== id))
        })
    }

    
    const exposedValue = {
        persons,
        addPerson,
        deletePersonTo,
        personFilterValue,
        setPersonFilterValue
    }
    
    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider> 
        )   
}
    
export {    
    Context,
    ProviderWrapper,    
}