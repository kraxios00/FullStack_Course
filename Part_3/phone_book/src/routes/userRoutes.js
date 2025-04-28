const express = require('express')
const userController = require('../controllers/userController.js')
const router = express.Router()

router.get('/info', userController.getInfo)
router.get('/persons', userController.getContacts)
router.get('/persons/:id', userController.getContactById)
router.delete('/persons/:id', userController.deleteContact);
router.post('/persons', userController.addContact)

module.exports = router