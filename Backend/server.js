const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const Router = require('./Routes/userRoutes')



// Connecting to the database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connected succesfully!")
}
)
.catch((error)=>{
    console.log(error)
})


// Middlewares
app.use(express.json())
app.use(Router)




// Listening to a port
let PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server is listening to port ${PORT}`);
})