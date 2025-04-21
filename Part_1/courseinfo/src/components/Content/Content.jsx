import Part from "../Part/Part"

const Content = ({parts}) => {
    return (
        <>
            <Part name={parts[0].name} total={parts[0].exercises}/>
            <Part name={parts[1].name} total={parts[1].exercises}/>
            <Part name={parts[2].name} total={parts[2].exercises}/>

        </>
    )
}

export default Content