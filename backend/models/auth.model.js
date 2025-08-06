const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, 'please enter email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String, 
        require: [true, 'please enter password']
    }
})

module.exports  = mongoose.model("Auth", authSchema)