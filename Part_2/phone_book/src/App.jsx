import { useState } from 'react'
import Form from './components/Form'
import Numbers from './components/Numbers'
import Input from './components/Input'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      number: '040-1234567',
      id: 1
    }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleContactChange = (event) => {
    setNewName(event)
  }

  const addContact = (event) => {
    event.preventDefault()

    const newContact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const isDuplicateName = persons.some(person => person.name === newName)

    if (isDuplicateName) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(newContact))
    setNewName('')
    setNewNumber('')
}

  return (
    <>
      <Input newValue={newFilter} setNewValue={setNewFilter} text="filter shown with"/>
      <Form 
      newName={newName} 
      setNewName={handleContactChange} 
      addContact={addContact}
      newNumber={newNumber}
      setNewNumber={setNewNumber}
      />
      <Numbers persons={persons} newFilter={newFilter}/>
    </>
  )
}

export default App