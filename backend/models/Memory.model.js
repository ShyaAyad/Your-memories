const mongoose = require('mongoose')

const MemorySchema = mongoose.Schema({
    creator: {
        type: String,
        required: [true, 'Memory must have a creator']
    },
    title: {
        type: String,
        required: [true, 'Memory must have a title']
    },
    description: {
        type: String,
        default: ''
    },
    createDate: {
        type: Date, 
        default: Date.now // default date is now 
    },
    tags: {
        type: [String], // tags can be more that one stored in an array
        default: []
    }
})

module.exports = mongoose.model("Memory", MemorySchema)
