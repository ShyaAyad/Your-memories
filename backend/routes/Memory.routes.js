const express = require('express')
const router = express.Router()

router.get('/', () => console.log("Get all memories")) // route to get all memories 
router.post('/', () => console.log("Create memory")) // route to create a memory 
router.put('/:id', () => console.log("Update memroy")) // route to update memory 
router.delete('/:id', () => console.log("Delete memroy")) // route to delete a memory

module.exports = router // export router to use the routes later 