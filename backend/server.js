const express = require('express')
const dontenv = require('dotenv').config()
const { connectDB } = require('./config/db.js')

const PORT = process.env.PORT || 5000

const app = express()

connectDB()
app.use('/memory', require('./routes/Memory.routes.js'))

app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))