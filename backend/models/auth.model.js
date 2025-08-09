const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    userName: {
        type: String,
        require: [true, 'please enter a username'],
        unique: [true, 'username must be unique']
    },
    email: {
        type: String,
        require: [true, 'please enter email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String, 
        require: [true, 'please enter password'],
        minLength: [6, 'password should not be less than 6 characters']
    }
})

module.exports  = mongoose.model("Auth", authSchema)