const Numbers = ({ persons }) => {
    return (
        <>
            <h2>Numbers</h2>
            {
                persons.length > 0 && (
                    persons.map(person => (
                        <p>{`${person.name} : ${person.number}`}</p>
                    ))
                )
            }
        </>
    )
}

export default Numbers