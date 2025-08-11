const Memory = require("../models/Memory.model.js");
const mongoose = require("mongoose");

// mongoose methods find(), findById(), findByIdAndUpdate(), deleteOne(), remove()

const getMemory = async (req, res) => {
  try {
    const getMemo = await Memory.find();

    if (!getMemo) {
      res.status(404).json({ message: "No memory was found!" });
    }

    res.status(200).json(getMemo);
  } catch (error) {
    console.log("Couldn't return any memory", error);
  }
};

const createMemory = async (req, res) => {
  try {
    const memoryData = {
      ...req.body, // getting all the data
      image: req.file?.path || "", // also the path of the image if there is one
    };

    if (!memoryData) {
      res.status(400);
      console.log("There is no data");
    }

    const newMemory = new Memory(memoryData);
    await newMemory.save();

    // const createMemo = await Memory.create({ data })

    res.status(200).json(newMemory);
  } catch (error) {
    console.log("Couldn't create a memory, Try again!");
  }
};

const updateMemory = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const objectId = new mongoose.Types.ObjectId(id);
    const updateMemo = await Memory.findById(objectId); // finding the specific memory to be updated

    if (!updateMemo) {
      return res.status(404).json({ message: "No memory was found!" });
    }

    const updatedMemory = await Memory.findByIdAndUpdate(objectId, data, {
      new: true,
    }); // update memory data
    res.status(200).json(updatedMemory);
  } catch (error) {
    console.log("Couldn't update memroy, Try again!", error);
  }
};

const deleteMemory = async (req, res) => {
  try {
    // id comes from the frontend and we search in mongoDB collections to delete it
    const { id } = req.params;
    const objectId = new mongoose.Types.ObjectId(id); // why do this? because sometimes mongo id and the one coming from frontend mismatch (String & ObjectId)
    const deleteMemo = await Memory.findById(objectId); // find specific memory to delete

    // const deleteMemo = await Memory.findByIdAndDelete(req.params.id)  // works at some cases but safer to use the above approach

    if (!deleteMemo) {
      return res.status(404).json({ message: "No memory was found!" });
    }

    await deleteMemo.deleteOne(); // if found, then remove it
    res.status(200).json({ message: "Memory has been deleted successfully!" });
  } catch (error) {
    console.log("Couldn't delete memory, Try again!");
  }
};

module.exports = {
  getMemory,
  createMemory,
  updateMemory,
  deleteMemory,
};
