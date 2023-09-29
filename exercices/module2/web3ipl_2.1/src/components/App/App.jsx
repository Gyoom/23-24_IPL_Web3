import { useState } from 'react'
import Button from "components/Button/Button"
import Display from "components/Display/Display"


const App = () => {
  const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))

  const handleClick = (e) => { 
      setCounter(e)
      localStorage.setItem("counter", JSON.stringify(e))
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button
        clickFunction={() => handleClick(counter + 1)}
        text='plus'
      />
      
      <Button
        clickFunction={() => handleClick(0)}
        text='zero'
      />     
      <Button
        clickFunction={() => handleClick(counter - 1)}
        text='minus'
      />           
    </div>
  )
}
export default App