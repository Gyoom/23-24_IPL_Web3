import Part from 'components/Part/Part'

const Content = ({ parts }) => {
    return (
      <ul>
        {parts.map(part => 
            <Part part={part} />
          )}

      </ul>
    )
  }

  export default Content