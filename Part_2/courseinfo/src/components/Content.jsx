const Content = ({ content }) => {
    return (
      <div>
        {content.map((part) => (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
    )
}
  
export default Content