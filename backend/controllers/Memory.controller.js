const Memory = require('../models/Memory.model.js')

// mongoose methods find(), findById(), findByIdAndUpdate(), deleteOne(), remove()

const getMemory = async(req, res) => {
    try {
        const getMemo = await Memory.find()

        if(!getMemo){
            res.status(404).json({message: "No memory was found!"})
        }

        res.status(200).json(getMemo)
    } catch (error) {
        console.log("Couldn't return any memory", err)
    }
}

const createMemory = async(req, res) => {
    try {

        const data = req.body; // getting the body data to create the memory with later

        if(!data){
            res.status(400)
            console.log("There is no data")
        }

        const createMemo = await Memory.create(data)

        res.status(200).json(createMemo)
        
    } catch (error) {
        console.log("Couldn't create a memory, Try again!")
    }
}

const updateMemory = async(req, res) => {
    try {
        const data = req.body;
        const updateMemo = await Memory.findById(req.params.id) // finding the specific memory to be updated

        if(!updateMemo){
            res.status(404).json({message: "No memory was found!"})
        }

        const updatedMemory = await Memory.findByIdAndUpdate(req.params.id, data, {new: true}) // update memory data
        res.status(200).json(updatedMemory)

    } catch (error) {
        console.log("Couldn't update memroy, Try again!")
    }
}

const deleteMemory = async(req, res) => {
    try {
        const deleteMemo = await Memory.findById(req.params.id) // find specific memory to delete

        if(!deleteMemo){
            res.status(404)
            console.log("No memory was found!")
        }

        await deleteMemo.remove() // if found, then remove it 
    } catch (error) {
        console.log("Couldn't delete memory, Try again!")
    }
}

module.exports = { 
    getMemory,
    createMemory,
    updateMemory,
    deleteMemory
}