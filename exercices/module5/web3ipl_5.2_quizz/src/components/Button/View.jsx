import React, { useContext } from "react"
import { Context as ViewsContext } from "contexts/ViewsContext"

const View = ({ view }) => {
    const { incrementView } = useContext(ViewsContext)

    const handleClick = () => {
        incrementView(view.uuid)
    }

    return (
        <li>
            <button 
                onClick={() => handleClick()}
            >
                Vote
            </button>
            { " " + view.text + " : " + view.votes }
        </li>
    )
}

export default View