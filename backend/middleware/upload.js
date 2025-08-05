const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: "./public/images",
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
}).single('image')  // <--- this must match the field with frontend form data

module.exports = upload