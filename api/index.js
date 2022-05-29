const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const { response } = require('express')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const port = 8800

dotenv.config()

/* mongoose.connect(process.env.MONGO_URL,
  {useNewUrlParser: true, useUnifiedTopology: true,},
  ()=>{
    console.log("Connected to MongoDB")
}) */

mongoose.connect(process.env.MONGO_URL,()=>{console.log("Connected to MongoDB")})

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)


app.listen(port, () => {
  console.log(`Backend server is running on ${port}`)
})