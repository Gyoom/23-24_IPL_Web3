import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {
    const [ theme, setTheme ] = useState(
        {
            backgroundColor, 
            primaryTextColor,
            secondaryTextColor,
            linkColor,
        });

    const setDarkTheme = () => {
        document.setDarkTheme()
    }

    const setLightTheme = () => {

    }

    const toggleTheme = () => {
        
    }

    const  getCurrentThemeDetails = () => {
        return theme;
    }
    
    const exposedValue = {
        setDarkTheme,
        setLightTheme,
        toggleTheme,
        getCurrentThemeDetails
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}