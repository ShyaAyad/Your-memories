const mongoose = require('mongoose')

const MemorySchema = mongoose.Schema({
    creator: {
        type: String,
        trim: true,
        required: [true, 'Memory must have a creator']
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Memory must have a title']
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    createDate: {
        type: Date, 
        trim: true,
        default: Date.now // default date is now 
    },
    tags: {
        type: [String], // tags can be more that one stored in an array
        trim: true,
        default: []
    }, 
    image: {
        type: String,
        trim: true,
        required: false
    }
})

module.exports = mongoose.model("Memory", MemorySchema)
