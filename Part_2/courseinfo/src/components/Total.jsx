const Total = ({ content }) => {
    const total = content.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <>
        <h3>{`Total of ${total} exercises`}</h3>
      </>
    )
}
  
export default Total