require ('dotenv').config()

const express = require('express')
const articles = require('./routes/articles')
const mongoose = require('mongoose')


//express app
const app = express()

const cors = require('cors')
app.use(cors(({
    origin: 'http://localhost:5173', // Allow requests from the frontend
    methods: ['GET', 'POST'],       // Allow specific HTTP methods
})))


//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/articles',articles)


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, () => {
      console.log('Listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log('Database Connection Error:', error.message)
  })



// npx nodemon server.js => cmd to use to run this script
// final just use npm run dev
// server link = http://localhost:3000/api/articles