const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Auth = require('../models/auth.model.js')

const logIn = async(req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await Auth.findOne({ email })

        if(!existingUser){
            res.status(404).json({message: "No user found with this email"})
        }

        // compare the passwords and then let user to login or not
        const matching = await bcrypt.compare(password, existingUser.password)
        if(!matching){
            res.status(400).json({message: "Incorrect password, Try again!"})
        }

        res.status(201).json({message: "Logged in successfully", data: existingUser})
    } catch (error) {
        console.log("Failed to login, please try again!")
    }
}

const signUp = async(req, res) => {
    const { username, email, password } = req.body;

    try {
        // hash the password first
        const salt = await bcrypt.genSalt() // generate salt
        const hashedPassword = await bcrypt.hash(password, salt) // hash the password 
        
        console.log(hashedPassword)

        // create a new user and save the data to the database
        const newUser = await Auth.create({ username, email, password: hashedPassword });
        res.status(201).json({message: "User created successfully", data: newUser})
        console.log(newUser)

    } catch (error) {
        console.log("Failed to create a new user", error)
    }
}

module.exports = {
    logIn,
    signUp
}