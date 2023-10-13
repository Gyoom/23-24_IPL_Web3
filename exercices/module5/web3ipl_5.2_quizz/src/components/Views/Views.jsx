import React, { useContext } from "react"
import { Context as ViewsContext } from "contexts/ViewsContext"
import View from "components/Button/View"

const Views = () => {
    const { views } = useContext(ViewsContext)

    return (
        <div>
            <ul>
                { views.map(v => <View key={v.uuid} view={v} />)}
            </ul>
        </div>
    )

} 

export default Views