import { useState } from 'react'
import Anecdotes from './components/Anecdotes'
import Button from './components/Button'
import MostVotedAnecdote from './components/MostVotedAnecdote'

const BUTTON_CONSTANTS = {
  NEXT: 'next anecdote',
  VOTE: 'vote'
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ] 

  const [selected, setSelected] = useState(0)
  const [votation, setVotation] = useState(new Uint8Array(8))

  const onNext = () => {
    const randomize = (Math.random() * 8) | 0
    setSelected(randomize)
  }

  const onVote = () => {
    const updatedVotation = [...votation];
    updatedVotation[selected] += 1;
    setVotation(updatedVotation);
  }

  const mostVoted = () => {
    const maxVotes = Math.max(...votation);
    const mostVotedIndex = votation.indexOf(maxVotes);
    return anecdotes[mostVotedIndex];
  }

  return (
    <>
      <Anecdotes anecdote={anecdotes[selected]} votes={votation[selected]}/>
      <Button onPress={onVote} text={BUTTON_CONSTANTS.VOTE}/>
      <Button onPress={onNext} text={BUTTON_CONSTANTS.NEXT}/>
      {
        Math.max(...votation) > 0 &&
        <MostVotedAnecdote anecdote={mostVoted()} />
      }
    </>
  )
}

export default App