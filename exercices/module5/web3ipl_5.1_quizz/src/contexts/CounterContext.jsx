import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))

    const pickCounter = (counterName) => {
        var newCounter
        if (counter !== undefined)
        {
            newCounter = {...counter}
        }
        else 
        {
            newCounter = {
                
                good: 0,
                ok: 0,
                bad: 0
            } 
        }

        switch(counterName) 
        {
            case "good":
                newCounter.good++
                break;
            case "ok":
                newCounter.ok++
                break;
            case "bad":
                newCounter.bad++
                break;
        }

        setCounter(newCounter)   
        localStorage.setItem("counter", JSON.stringify(newCounter))
    }

    const resetCounter = () => {
        var newCounter = {
                good: 0,
                ok: 0,
                bad: 0
            } 

        setCounter(newCounter)   
        localStorage.setItem("counter", JSON.stringify(newCounter))
    }
    
    const exposedValue = {
        counter,
        pickCounter,
        resetCounter
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}