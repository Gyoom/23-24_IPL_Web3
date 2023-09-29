import { useState } from "react"
const Loading = () => {
  const [ loading, setLoading ] = useState(true);


   const handlerLoading = () => {
      setLoading(true)
   }

   const timer = () => {
    setTimeout(() => setLoading(false), 3000)
   }

   const affichage = () => {
      if (loading) {
        timer()
        return (
        <>
        <p>Chargement en cours</p>
        </>
        )
      } else {
        return (
          <>
          <p>Chargement terminé</p>
          <button onClick={() => handlerLoading()}>lancer le chargement</button>
          </>
          )

      }
   }


    return (
      <div>
        {affichage()}
      </div>

    )
  }
  export default Loading