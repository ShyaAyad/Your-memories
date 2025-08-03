const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send("Get all memories")) // route to get all memories 
router.post('/', (req, res) => res.send("Create memory")) // route to create a memory 
router.put('/:id', (req, res) => res.send("Update memroy")) // route to update memory 
router.delete('/:id', (req, res) => res.send("Delete memroy")) // route to delete a memory

module.exports = router // export router to use the routes later 