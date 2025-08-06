const express = require('express')
const dontenv = require('dotenv').config()
const cors = require('cors')
const { connectDB } = require('./config/db.js')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(express.json()) // middleware to parse json request 
app.use(express.urlencoded({extended: false}))

connectDB()
app.use('/public', express.static('public')); // this means get access to everything inside of the public folder 
app.use('/api/memory', require('./routes/Memory.routes.js'))

app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))