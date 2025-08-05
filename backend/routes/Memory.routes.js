const express = require('express')
const router = express.Router()
const { getMemory, createMemory, updateMemory, deleteMemory } = require('../controllers/Memory.controller.js')
const upload = require('../middleware/upload.js') // calling this as a middleware to let user upload images in the form

router.get('/', getMemory) // route to get all memories 
router.post('/', upload, createMemory) // route to create a memory 
router.put('/:id', updateMemory) // route to update memory 
router.delete('/:id', deleteMemory) // route to delete a memory

module.exports = router // export router to use the routes later 