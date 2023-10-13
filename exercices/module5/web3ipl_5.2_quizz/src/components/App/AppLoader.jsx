import { ProviderWrapper as CounterProviderWrapper } from "contexts/ViewsContext.jsx";
import { ProviderWrapper as ThemeProviderWrapper } from "contexts/ThemesContext";
import App from "components/App/App.jsx";

const AppLoader = () => {
  return (
    <ThemeProviderWrapper>
        <CounterProviderWrapper>
            <App />
        </CounterProviderWrapper>
    </ThemeProviderWrapper>
  )
}

export default AppLoader