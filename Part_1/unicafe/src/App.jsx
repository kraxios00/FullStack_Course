import { useState } from 'react'
import FeedbackForm from './components/feedback/FeedbackForm'
import Statistics from './components/statistics/Statistics'

const FEEDBACK_CONSTANTS = {
  GOOD: "Good",
  NEUTRAL: "Neutral",
  BAD: "Bad",
  TOTAL: "Total",
  AVERAGE: "Average",
  POSITIVE: "Positive"
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const onFeedback = (text) => () => {
    if(text === FEEDBACK_CONSTANTS.GOOD) {const goodValue = good + 1;  setGood(goodValue)}
    if(text === FEEDBACK_CONSTANTS.NEUTRAL) {const neutralValue = neutral + 1;  setNeutral(neutralValue)}
    if(text === FEEDBACK_CONSTANTS.BAD) {const badValue = bad + 1;  setBad(badValue)}
  }

  return (
    <div>
      <FeedbackForm constants={FEEDBACK_CONSTANTS} onFeedback={onFeedback}/>
      <Statistics constants={FEEDBACK_CONSTANTS} values={{good: good, neutral: neutral, bad: bad}}/>
    </div>
  )
}

export default App