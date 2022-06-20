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
const multer  = require('multer')
const path = require('path')


dotenv.config()

/* mongoose.connect(process.env.MONGO_URL,
  {useNewUrlParser: true, useUnifiedTopology: true,},
  ()=>{
    console.log("Connected to MongoDB")
}) */

mongoose.connect(process.env.MONGO_URL,()=>{console.log("Connected to MongoDB")})

app.use("/images", express.static(path.join(__dirname, "public/images")))

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    
    cb(null, "public/images")
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({storage})

app.post("/api/upload",upload.single("file"),(req,res)=>{
  try {
    return res.status(200).json("File uploaded successfully.")
  } catch (err) {
    console.log(err)
  }
})

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)


app.listen(port, () => {
  console.log(`Backend server is running on ${port}`)
})