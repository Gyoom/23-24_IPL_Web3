import React, { useContext, useState } from "react"
import { Context as ViewsContext } from "contexts/ViewsContext"

const ViewForm = () => 
{
    const { addView } = useContext(ViewsContext)
    const [text, setText] = useState("")

    const handleClick = () => {
        addView(text)
    }

    const handleText = (event) => {
        setText(event.target.value)
    }

    return (
        <>
                <input 
                    type="text"
                    onChange={handleText}
                    value={text}
                    placeholder='add a new Opinion ...'
                    ></input>
                <button type="submit" onClick={() => handleClick()}>Add opinion</button>
        </>
    )
}

export default ViewForm