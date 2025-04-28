const contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

class UserService {
  getAllContacts() {
    return contacts
  }

  getInfo() {
    return `
        <div>Phonebook has info for ${contacts.length} people</div>
        <div>${new Date()}</div>
    `
  }

  getContactById(id) {
    const contact = contacts.find(contact => contact.id === id)
    if (!contact) {
      return null
    }
    return contact
  }

  addContact(name, number) {
    const newContact = {
      id: Math.round(Math.random() * 1000),
      name,
      number
    }
    contacts.push(newContact)
    return newContact
  }

  deleteContact(id) {
    const contactIndex = contacts.findIndex(contact => contact.id === id)
    if (contactIndex === -1) {
      return null
    }
    const deletedContact = contacts.splice(contactIndex, 1)[0]
    return deletedContact
  }
}

module.exports = new UserService()
