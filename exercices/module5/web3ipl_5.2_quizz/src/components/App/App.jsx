import ViewForm from "components/ViewForm/ViewForm";
import Views from "components/Views/Views";
import Footer from "components/Footer/Footer";
import { Context as ThemesContext } from "contexts/ThemesContext"
import React, { useContext} from "react"


const App = () => {
  const { getCurrentThemeDetails } = useContext(ThemesContext)

  return (
    <div style={getCurrentThemeDetails()}>
      <div>
        <Views />
      </div>
      <div>
        <ViewForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default App