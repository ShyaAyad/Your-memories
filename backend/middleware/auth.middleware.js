const jwt = require('jsonwebtoken')

const protectedRoute = (req, res, next) => {
    const token = req.cookies.jwt
    console.log("THE TOKEN IS: ", token)
    
    if(token){
        jwt.verify(token, "myJWT", (err, decodedToken) => {
            if(err){
                console.log(err.message)
                res.redirect('/signup')
            }else{
                console.log(decodedToken)
                next()
            }
        })
    }else{
        res.redirect('/signup')
    }
}

module.exports = { protectedRoute }