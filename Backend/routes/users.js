const router = require('express').Router()
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser,
} = require('../controllers/users')

//update user
router.put('/:id', updateUser)

//delete user
router.delete('/:id', deleteUser)

//get a user
router.get('/:id', getUser)

//follow a user
router.put('/:id/follow', followUser)

//unfollow a user
router.put('/:id/unfollow', unFollowUser)

module.exports = router
