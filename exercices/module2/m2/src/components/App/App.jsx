import { useState } from 'react'
import Button from "components/Button/Button"
import Display from "components/Display/Display"


const App = () => {
  const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))

  const handleClick = (e) => { 
      var newCount = parseInt(e.target.dataset.delta)
      setCounter(counter + newCount)
      localStorage.setItem("counter", JSON.stringify(counter + newCount))
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button
        clickFunction={handleClick}
        delta={1}
        text='plus'
      />
      <Button
        clickFunction={handleClick}
        delta={-counter}
        text='zero'
      />     
      <Button
        clickFunction={handleClick}
        delta={-1}
        text='minus'
      />           
    </div>
  )
}
export default App