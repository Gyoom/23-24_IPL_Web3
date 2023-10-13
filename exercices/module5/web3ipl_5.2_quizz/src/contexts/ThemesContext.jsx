import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {
    const [ themes, setThemes ] = useState(
        [
            {
                name : "Dark Theme",
                palette : 
                {
                    backgroundColor: "black", 
                    color: "white",
                    secondaryTextColor: "232D3F",
                    linkColor: "#232D3F",
                }
                
            },
            {
                name : "Light Theme", 
                palette : 
                {
                    backgroundColor: "white", 
                    color: "black",
                    secondaryTextColor: "#000000",
                    linkColor: "#0000ff",
                }
            },
            {
                name : "Toogle Theme", 
                palette : 
                {
                    backgroundColor: "#808080", 
                    color: "#000000",
                    secondaryTextColor: "#000000",
                    linkColor: "#ff0000",
                }
            }
        ]);
    
    const [ actualTheme, setActualTheme ] = useState("Light Theme");  

    const setDarkTheme = () => {
        setActualTheme("Dark Theme")
    }

    const setLightTheme = () => {
        setActualTheme("Light Theme")
    }

    const setToggleTheme = () => {
        setActualTheme("Toogle Theme")
    }

    const  getCurrentThemeDetails = () => {
        return themes.find(t => t.name === actualTheme).palette
    }
    
    const exposedValue = {
        themes,
        setDarkTheme,
        setLightTheme,
        setToggleTheme,
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