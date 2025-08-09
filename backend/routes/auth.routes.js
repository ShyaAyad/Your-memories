const express = require('express')
const router = express.Router()
const { logIn, signUp, createUser } = require('../controllers/auth.controller.js')

router.get('/login', () => console.log("Log in get request"))
router.get('/signup', () => console.log("sign up get request"))
router.post('/login', () => console.log("log in post request"))
router.post('/signup', signUp)

module.exports = router