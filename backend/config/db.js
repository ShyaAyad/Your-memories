const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Successfully connected to database ${connect.connection.host}`)
    }catch(err){
        console.log("Can't connect to database", err)
    }
}

module.exports = {connectDB}