const express = require('express')
const router = express.Router()
const { getMemory, createMemory, updateMemory, deleteMemory } = require('../controllers/Memory.controller.js')
const upload = require('../middleware/upload.js') // calling this as a middleware to let user upload images in the form
const { protectedRoute } = require('../middleware/auth.middleware.js')

router.get('/', getMemory) // route to get all memories 
router.post('/',protectedRoute, upload, createMemory) // route to create a memory which is protected only user with account can do it
router.put('/:id',protectedRoute, updateMemory) // route to update memory 
router.delete('/:id',protectedRoute, deleteMemory) // route to delete a memory

module.exports = router // export router to use the routes later 