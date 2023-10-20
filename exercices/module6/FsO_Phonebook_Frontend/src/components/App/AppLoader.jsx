import App from "./App"
import { ProviderWrapper as PersonsProviderWrapper } from "contexts/personsContext"

const AppLoader = () => {
    return (
        <PersonsProviderWrapper>
            <App />
        </PersonsProviderWrapper>
    )
}

export default AppLoader