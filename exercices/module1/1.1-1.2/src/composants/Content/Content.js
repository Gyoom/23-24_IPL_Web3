import Part from '../Part/Part'

const Content = (props) => {
    return (
      <>
        <Part part={props.part1} number={props.exercises1} />
        <Part part={props.part2} number={props.exercises2} />
        <Part part={props.part3} number={props.exercises3} />
      </>
    )
  }

  export default Content