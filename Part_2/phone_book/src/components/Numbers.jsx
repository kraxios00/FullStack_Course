import Button from "./Button"

const Numbers = ({ persons, newFilter, action }) => {
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            action(id)
        }
    }

    let filteredPersons = persons.filter(person => {
        return person.name.toLowerCase().includes(newFilter.toLowerCase())
    })
    
    return (
        <>
            <h2>Numbers</h2>
            {
                filteredPersons.length > 0 && (
                    filteredPersons.map(person => (
                        <div key={person.id}>
                            <p key={person.id}>{`${person.name} : ${person.number}`}</p>
                            <Button text="delete" action={() => handleDelete(person.id)}/>
                        </div>
                    ))
                )
            }
        </>
    )
}

export default Numbers