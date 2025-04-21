import Part from "../Part/Part"

const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
    return (
        <>
            <Part name={part1} total={exercises1}/>
            <Part name={part2} total={exercises2}/>
            <Part name={part3} total={exercises3}/>

        </>
    )
}

export default Content