const mongoose = require('mongoose')
const Auth = require('../models/auth.model.js')

const logIn = async(req, res) => {
    console.log("log in") // get user data in login 
}

const signUp = async(req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await Auth.create({ username, email, password });
        res.status(201).json({message: "User created successfully", data: newUser})
    } catch (error) {
        console.log("Failed to create a new user", error)
    }
}

const createUser = async(req, res) => {
    console.log('create user')
} 

module.exports = {
    logIn,
    signUp,
    createUser
}