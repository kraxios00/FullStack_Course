const Numbers = ({ persons, newFilter }) => {
    
    let filteredPersons = persons.filter(person => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
    })
    
    return (
        <>
            <h2>Numbers</h2>
            {
                filteredPersons.length > 0 && (
                    filteredPersons.map(person => (
                        <p key={person.id}>{`${person.name} : ${person.number}`}</p>
                    ))
                )
            }
        </>
    )
}

export default Numbers