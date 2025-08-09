const mongoose = require('mongoose')
const Auth = require('../models/auth.model.js')

const logIn = async(req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Auth.find({ email })
        console.log(existingUser)

        // hash password later
        res.status(201).json({message: "Logged in successfully", data: existingUser})
    } catch (error) {
        console.log("Failed to login, please try again!")
    }
}

const signUp = async(req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await Auth.create({ username, email, password });
        res.status(201).json({message: "User created successfully", data: newUser})
    
        // hash the password later
        
    } catch (error) {
        console.log("Failed to create a new user", error)
    }
}

module.exports = {
    logIn,
    signUp
}