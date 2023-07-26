const User = require('../models/User')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      res
        .status(400)
        .json('Please enter valid username, email and password to register!!!')
      return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(req.body.password, salt)

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPwd,
    })

    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json(error)
  }
}

const loginUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.status(400).json('Please enter valid email and password to login!!!')
      return
    }

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      res.status(404).json('User not found!!!')
      return
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
      res.status(400).json('Wrong Password!!!')
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  registerUser,
  loginUser,
}
