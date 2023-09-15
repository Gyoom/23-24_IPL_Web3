const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age}</p>
    </div>
  )
}

const App = () => {
  const age = 24
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Guillaume" age={age}/>
      <Hello name="Arno" age={age-3}/>
      <Hello name="Marius" age={age-7}/>
    </div>
  )
}

export default App