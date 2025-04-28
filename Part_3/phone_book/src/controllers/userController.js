const UserService = require('../services/userService')

exports.getInfo = (req, res) => {
    const info = UserService.getInfo()
    res.status(200).send(info)
}

exports.getContacts = (req, res) => {
    const contacts = UserService.getAllContacts()
    res.status(200).json(contacts)
}

exports.getContactById = (req, res) => {
    const id = parseInt(req.params.id, 10)
    const contact = UserService.getContactById(id)

    if (!contact) {
        return res.status(404).json({ error: 'Contact not found' })
    }

    res.status(200).json(contact)
}

exports.deleteContact = (req, res) => {
    const id = parseInt(req.params.id, 10)
    const deletedContact = UserService.deleteContact(id)

    if (!deletedContact) {
        return res.status(404).json({ error: 'Contact not found' })
    }

    res.status(200).json(deletedContact)
}

exports.addContact = (req, res) => {
    const contacts = UserService.getAllContacts()
    const { name, number } = req.body

    if (!name) {
        return res.status(400).json({ error: 'Name is required' })
    }

    if (!number) {
        return res.status(400).json({ error: 'Number is required' })
    }

    if (contacts.some(contact => contact.name === name)) {
        return res.status(400).json({ error: 'Name must be unique' })
    }

    if (!name || !number) {
        return res.status(400).json({ error: 'Name and number are required' })
    }

    const newContact = UserService.addContact(name, number)
    res.status(201).json(newContact)
}