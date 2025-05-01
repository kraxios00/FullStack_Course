const express = require('express')
const userRoutes = require('./src/routes/userRoutes.js')
var morgan = require('morgan')
const app = express()

app.use(express.json())

morgan.token('body', req => JSON.stringify(req.body))
  
app.use(morgan(':method :url :status :response-time ms - body=:body'))
app.use('/api', userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})