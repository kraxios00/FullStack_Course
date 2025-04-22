import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </>
  )
}

export default Course