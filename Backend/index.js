const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

dotenv.config()

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('MongoDB connected!!!')
  }
)

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/', (req, res) => {
  res.send('Welcome to home page')
})

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.listen(8800, () => {
  console.log('Backend server is running!!!')
})
