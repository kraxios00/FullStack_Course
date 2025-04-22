import StatisticsLine from "./StatisticsLine"

const Statistics = ({constants, values}) => {
    const noFeedback = values.good === 0 && values.neutral === 0 && values.bad === 0
    const total = values.good + values.neutral + values.bad
    
    const averageValue = () => {
        const average = (values.good + 0 - values.bad) / total
        return parseFloat(average);
    }

    const positiveValue = () => {
        const average = values.good / total * 100
        return parseFloat(average);
    }

    return (
        <>
            <h1>Statistics</h1>
            {
                noFeedback ?
                <h2>No Feedback Given</h2> :
                <>
                    <StatisticsLine text={constants.GOOD} value={values.good}/>
                    <StatisticsLine text={constants.NEUTRAL} value={values.neutral}/>
                    <StatisticsLine text={constants.BAD} value={values.bad}/>
                    <StatisticsLine text={constants.TOTAL} value={total}/>
                    <StatisticsLine text={constants.AVERAGE} value={averageValue()}/>
                    <StatisticsLine text={constants.POSITIVE} value={positiveValue()}/>
                </>
            }
        </>
    )
}

export default Statistics