const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

//update user
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (req.body.userId === id || req.user.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10)
          req.body.password = await bcrypt.hash(req.body.password, salt)
        } catch (error) {
          return res.status(500).json(error)
        }
      }

      const user = await User.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).json('Account has been updated!')
    } else {
      res.status(403).json('You can update only your account!')
      return
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

//delete user

//get a user

//follow a user

//unfollow a user

module.exports = router
