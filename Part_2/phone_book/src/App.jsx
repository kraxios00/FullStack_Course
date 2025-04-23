import { useEffect,useState } from 'react'
// import useFetch from './hooks/useFetch'
import axios from 'axios'
import Form from './components/Form'
import Numbers from './components/Numbers'
import Input from './components/Input'

const App = () => {
  // const { data, loading, error } = useFetch('http://localhost:3001/persons')
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [loading, setLoading] = useState(true);
  const url = 'http://localhost:3001/persons'
  const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setPersons(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
        };
    
        fetchData();
    }, [url]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

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