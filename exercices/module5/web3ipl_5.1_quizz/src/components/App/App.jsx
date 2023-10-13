import Button from "components/Button/Button"
import { Context as CounterContext } from "contexts/CounterContext";
import React, { useContext } from "react";


const App = () => {
  const { counter, pickCounter, resetCounter } = useContext(CounterContext)

  const handleQuizzClick = (e) => { 
      pickCounter(e)
  }

  const handleResetClick = () => { 
      resetCounter()
  }

  return (
    <>
      <div>
        Good : {counter == null ? 0 : counter.good} <Button clickFunction={() => handleQuizzClick("good")} text={"increase Good"} />
      </div>
      <div>
        OK : {counter == null ? 0 : counter.ok} <Button clickFunction={() => handleQuizzClick("ok")} text={"increase Good"} />
      </div>
      <div>
        Bad : {counter == null ? 0 : counter.bad} <Button clickFunction={() => handleQuizzClick("bad")} text={"increase Good"} />
      </div>
      <Button clickFunction={() => handleResetClick()} text={"Reset"} />
    </>
  )
}
export default App