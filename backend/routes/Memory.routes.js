const express = require('express')
const router = express.Router()
const { getMemory, createMemory, updateMemory, deleteMemory } = require('../controllers/Memory.controller.js')

router.get('/', getMemory) // route to get all memories 
router.post('/', createMemory) // route to create a memory 
router.put('/:id', updateMemory) // route to update memory 
router.delete('/:id', deleteMemory) // route to delete a memory

module.exports = router // export router to use the routes later 