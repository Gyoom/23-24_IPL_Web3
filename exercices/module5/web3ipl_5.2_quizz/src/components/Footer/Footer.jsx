import React, { useContext, useState } from "react"
import { Context as ThemesContext } from "contexts/ThemesContext"

const Footer = () => {
    const { themes, setDarkTheme, setLightTheme, setToggleTheme } = useContext(ThemesContext)
    const [ themeSelected, setThemeSelected ] = useState("Light Theme")

    const selectHandle = (event) => {
        setThemeSelected(event.target.value)
        switch (event.target.value) {
            case "Light Theme":
                setLightTheme()
                break;
            case "Dark Theme":
                setDarkTheme()
                break;
            case "Toogle Theme":
                setToggleTheme()
                break;

        }

    }

    return (
        <footer>
            <select value={themeSelected} onChange={selectHandle}>
                {themes.map(t => <option key={t.name} value={t.name}>{ t.name }</option>) }
            </select>          
        </footer>
    )

}

export default Footer