const Total = ({parts}) => {
  const sumWithInitial = parts.reduce((s, p) => {
    return s[p.exercises] + p.exercises
  }, 0);

  

  return (
    <p>{sumWithInitial}</p>
  )
}

  export default Total