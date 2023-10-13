import React, { useContext } from "react"
import { Context as ViewsContext } from "contexts/CounterContext"
import View from "components/Button/View"

const Views = () => {
    const { views } = useContext(ViewsContext)

    return (
        <>
            <ul>
                { views.map(v => <View key={v.uuid} view={v} />)}
            </ul>
        </>
    )

} 

export default Views