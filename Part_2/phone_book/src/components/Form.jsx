import Input from "./Input"

const Form = ({ newName, setNewName, addContact, newNumber, setNewNumber}) => {
    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={addContact}>
                <Input newValue={newName} setNewValue={setNewName} text="name"/>
                <Input newValue={newNumber} setNewValue={setNewNumber} text="number"/>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Form