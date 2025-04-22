import FeedbackButton from "./FeedbackButton"

const FeedbackForm = ({onFeedback, constants}) => {
    return (
        <>
            <h1>Give Feedback</h1>
            <FeedbackButton onButton={onFeedback} text={constants.GOOD}/>
            <FeedbackButton onButton={onFeedback} text={constants.NEUTRAL}/>
            <FeedbackButton onButton={onFeedback} text={constants.BAD}/>
        </>
    )
}

export default FeedbackForm