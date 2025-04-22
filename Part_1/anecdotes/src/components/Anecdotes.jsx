const Anecdotes = ({anecdote, votes}) => {
  return (
    <>
        <h1>Anecdote of the day</h1>
        <h3>{anecdote}</h3>
        <p><b>has {votes} votes</b></p>
    </>
  )
}

export default Anecdotes