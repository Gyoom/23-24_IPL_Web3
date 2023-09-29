import { useState } from 'react'
import Button from "components/Button/Button"
import Display from "components/Display/Display"


const App = () => {
  const [ feedback, setFeedback ] = useState(JSON.parse(localStorage.getItem("feedback")))

  const initFeedBack = () => {
    const newFeedBack = {
      good : 0,
      neutral : 0,
      bad : 0,
    }
    setFeedback(newFeedBack)
    localStorage.setItem("feedback", JSON.stringify(newFeedBack))
  }

  const handleClick = (e) => { 
    const newFeedBack = {
      good : feedback.good,
      neutral : feedback.neutral,
      bad : feedback.bad,
    }

    if (e === 1) newFeedBack.good++
    else if (e === 2) newFeedBack.neutral++
    else if (e === 3) newFeedBack.bad++

    setFeedback(newFeedBack)
    localStorage.setItem("feedback", JSON.stringify(newFeedBack))
  }

  if (feedback == null) initFeedBack();

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button
          clickFunction={() => handleClick(1)}
          text='Good'
        />
        
        <Button
          clickFunction={() => handleClick(2)}
          text='Neutral'
        />     
        <Button
          clickFunction={() => handleClick(3)}
          text='Bad'
        />          
      </div>
      <Display text="Statistics" feedback={feedback} initFeedBack={initFeedBack}/>
    </div>
  )
}
export default App