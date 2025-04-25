import { useState, useEffect } from 'react'
import contactService from './service/contactService'
import Form from './components/Form'
import Numbers from './components/Numbers'
import Input from './components/Input'

const TYPE_CONSTANTS = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
  ERROR: 'delete'
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState({type: null, text: null})

  useEffect(() => {
        contactService.getAllContacts().then(res => setPersons(res.data))
    }, [])

  const addPerson = (newContact) => {
      contactService.createContact(newContact).then(res => {
          setPersons(persons.concat(res.data))
          setMessage({
            ...message,
              type: TYPE_CONSTANTS.ADD,
              text: `Added ${res.data.name}`
          })
          setTimeout(() => {
              setMessage({
                ...message,
                  text: null
              })
          }, 5000)
      })
  }

  const updatePerson = (id, updatedContact) => {
      contactService.updateContact(id, updatedContact).then(res => {
          setPersons(persons.map(person => person.id !== id ? person : res.data))
          setMessage({
            ...message,
              type: TYPE_CONSTANTS.UPDATE,
              text: `Updated ${res.data.name}`
          })
          setTimeout(() => {
              setMessage({
                ...message,
                  text: null
              })
          }, 5000)
      }).catch(error => {
        console.error(error)
        setMessage({
          ...message,
            type: TYPE_CONSTANTS.ERROR,
            text: `Information of ${updatedContact.name} has already been removed from server`
        })
        setTimeout(() => {
            setMessage({
              ...message,
                text: null
            })
        }, 5000)
    })
  }

  const deletePerson = (id) => {
      contactService.deleteContact(id).then(() => {
          const newContactList = persons.filter(person => person.id !== id)
          setPersons(newContactList)
          setMessage({
            ...message,
              type: TYPE_CONSTANTS.DELETE,
              text: `Deleted ${persons.find(person => person.id === id).name}`
          })
          setTimeout(() => {
              setMessage({
                ...message,
                  text: null
              })
          }, 5000)
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
      {message.text && <p className={`message message_${message.type}`}>{message.text}</p>}
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