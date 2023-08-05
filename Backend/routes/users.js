const router = require('express').Router()
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser,
  getFollowingsOfUser,
} = require('../controllers/users')

//update user
router.put('/:id', updateUser)

//delete user
router.delete('/:id', deleteUser)

//get a user by query with id or username
router.get('/', getUser)

//get followings
router.get('/friends/:userId', getFollowingsOfUser)

//follow a user
router.put('/:id/follow', followUser)

//unfollow a user
router.put('/:id/unfollow', unFollowUser)

module.exports = router
