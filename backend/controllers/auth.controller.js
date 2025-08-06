const mongoose = require('mongoose')
const Auth = require('../models/auth.model.js')

const logIn = async(req, res) => {
    console.log("log in") // get user data in login 
}

const signUp = async(req, res) => {
    console.log("sign up") 
}

const createUser = async(req, res) => {
    console.log('create user')
} 

module.exports = {
    logIn,
    signUp,
    createUser
}