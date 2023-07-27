const User = require('../models/User')
const bcrypt = require('bcrypt')

const updateUser = async (req, res) => {
  try {
    const { id } = req.params

    if (req.body.userId === id || req.body.isAdmin) {
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
    res.status(500).json('You can update only your account!')
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    if (req.body.userId === id || req.body.isAdmin) {
      await User.findByIdAndDelete(id)
      res.status(200).json('Account has been deleted successfully!')
    } else {
      res.status(403).json('You can delete only your account!')
      return
    }
  } catch (error) {
    res.status(500).json('You can delete only your account!')
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      res.status(404).json('User not found!!!')
      return
    }

    const { password, updatedAt, ...other } = user._doc
    res.status(200).json(other)
  } catch (error) {
    res.status(500).json('User not found!!!')
  }
}

const followUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const user = await User.findById(req.params.id) //want to follow this user
      const currentUser = await User.findById(req.body.userId) //login user

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } })
        await currentUser.updateOne({ $push: { followings: req.params.id } })

        res.status(200).json('Requested User has been followed')
      } else {
        res.status(403).json('You already follow this user')
      }
    } else {
      res.status(403).json("You can't follow yourself")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const unFollowUser = async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const user = await User.findById(req.params.id) //want to unfollow this user
      const currentUser = await User.findById(req.body.userId) //login user

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } })
        await currentUser.updateOne({ $pull: { followings: req.params.id } })

        res.status(200).json('Requested User has been unfollowed')
      } else {
        res.status(403).json('You are not following this user')
      }
    } else {
      res.status(403).json("You can't unfollow yourself")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser,
}
