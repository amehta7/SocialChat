const router = require('express').Router()
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  likeDislikePost,
  timelineAllPost,
  getUserPosts,
} = require('../controllers/post')

//create a post
router.post('/', createPost)

//update a post
router.put('/:id', updatePost)

//delete a post
router.delete('/:id', deletePost)

//get a post
router.get('/:id', getPost)

//get timeline posts(following users posts)
router.get('/timeline/:userId', timelineAllPost)

//get all posts of specific user
router.get('/profile/:username', getUserPosts)

//like/dislike a post
router.put('/:id/like', likeDislikePost)

module.exports = router
