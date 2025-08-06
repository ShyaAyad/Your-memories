const express = require('express')
const router = express.Router()

router.get('/', () => console.log("Log in get request"))
router.get('/', () => console.log("sign up get request"))
router.post('/', () => console.log("log in post request"))
router.post('/', () => console.log("sign up post request"))

module.exports = router