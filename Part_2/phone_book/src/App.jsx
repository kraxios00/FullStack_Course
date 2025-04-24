import { useState, useEffect } from 'react'
import contactService from './service/contactService'
import Form from './components/Form'
import Numbers from './components/Numbers'
import Input from './components/Input'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
        contactService.getAllContacts().then(res => setPersons(res.data))
    }, [])

  const addPerson = (newContact) => {
      contactService.createContact(newContact).then(res => {
          setPersons(persons.concat(res.data))
      })
  }

  const updatePerson = (id, updatedContact) => {
      contactService.updateContact(id, updatedContact).then(res => {
          setPersons(persons.map(person => person.id !== id ? person : res.data))
      })
  }

  const deletePerson = (id) => {
      contactService.deleteContact(id).then(() => {
          const newContactList = persons.filter(person => person.id !== id)
          setPersons(newContactList)
      })
  }

  const handleContactChange = (targetname) => {
    setNewName(targetname)
  }

  const handleNumberChange = (targetnumber) => {
    if (window.confirm(`${targetnumber} is already added to phonebook, replace the old number with a new one?`)) {
      const personToUpdate = persons.find(person => person.name === newName)
      const updatedContact = { ...personToUpdate, number: newNumber }
      updatePerson(personToUpdate.id, updatedContact)
      setNewName('')
      setNewNumber('')
    }
  }

  const addContact = (event) => {
    event.preventDefault()

    const newContact = {
      name: newName,
      number: newNumber,
    }

    const isDuplicateName = persons.some(person => person.name === newName)

    if (isDuplicateName) {
      handleNumberChange(newName)
      return
    }

    addPerson(newContact)
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
      <Numbers persons={persons} newFilter={newFilter} action={deletePerson}/>
    </>
  )
}

export default App