const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

const app = express()

dotenv.config()

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('MongoDB connected!!!')
  }
)

app.use('/images', express.static(path.join(__dirname, 'public/images')))

//middleware

app.use(express.json())
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
)
app.use(morgan('common'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploded successfully')
  } catch (error) {
    console.error(error)
  }
})

app.get('/', (req, res) => {
  res.send('Welcome to server')
})

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.listen(8800, () => {
  console.log('Backend server is running!!!')
})
