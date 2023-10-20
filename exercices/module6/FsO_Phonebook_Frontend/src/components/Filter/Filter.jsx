import { useState, useContext, useEffect } from 'react'
import { Context as PersonsContext } from 'contexts/personsContext'

const Filter = () => {
    const { personFilterValue,  setPersonFilterValue } = useContext(PersonsContext)

    const handleFilterValue = (event) => {
        setPersonFilterValue(event.target.value)
    }

    return (
        <form>
            <div>
                Filter shown with : 
                <input 
                    value={personFilterValue}
                    onChange={handleFilterValue}
                    placeholder='filter with ...'
                />
            </div>
        </form>
    )
}

export default Filter