import Header from "components/Header/Header"
import Content from "components/Content/Content"
import Total from "components/Total/Total"

const Course = ({ courses }) => {
    return (
        <>
            
            <Header title={courses.name}/>
            <Content parts = {courses.parts}/>
            <Total parts = {courses.parts} />
        </>
    )    
    
}
  
export default Course