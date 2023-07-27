const router = require('express').Router()
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  likeDislikePost,
  timelineAllPost,
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
router.get('/timeline/all', timelineAllPost)

//like/dislike a post
router.put('/:id/like', likeDislikePost)

module.exports = router
