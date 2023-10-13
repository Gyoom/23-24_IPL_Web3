import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {
    const [ views, setViews ] = useState(() => {
        if (JSON.parse(localStorage.getItem("views")) === null) 
        {
            localStorage.setItem("views", JSON.stringify(
                [
                    {
                        uuid: uuid(),
                        text: "Nous vivons dans la matrice",
                        votes: 0,
                    },
                    {
                        uuid: uuid(),
                        text: "Nous vivons dans le monde réel",
                        votes: 0,
                    },
                    {
                        uuid: uuid(),
                        text: "Nous vivons ailleurs",
                        votes: 0,
                    }
               ]
            ))
        }
        return JSON.parse(localStorage.getItem("views"))
    })

    const addView = (textNewView) => {
        let newView = 
        {
            uuid: uuid(),
            text: textNewView,
            votes: 0,
        } 

        let newViews = [].concat(views)
        
        newViews.push(newView)

        setViews(newViews)   
        localStorage.setItem("views", JSON.stringify(newViews))
    }

    const incrementView = (uuid) => {
        
        let newViews = [].concat(views); 
        newViews.find(v => v.uuid === uuid).votes++
        setViews(newViews)   
        localStorage.setItem("views", JSON.stringify(newViews))
    }
    
    const exposedValue = {
        views,
        addView,
        incrementView
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}