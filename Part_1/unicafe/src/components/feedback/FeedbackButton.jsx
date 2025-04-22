const FeedbackButton = ({onButton, text}) => {
    return (
        <>
            <button onClick={onButton(text)}>{text}</button>
        </>
    )
}

export default FeedbackButton