const express = require('express')
const router = express.Router()
const { logIn, signUp, createUser } = require('../controllers/auth.controller.js')

// router.get('/login', logIn)
// router.get('/signup', () => console.log("sign up get request"))
router.post('/login', logIn)
router.post('/signup', signUp)

module.exports = router