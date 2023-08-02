const Post = require('../models/Post')
const User = require('../models/User')

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body)

    res.status(200).json(newPost)
  } catch (error) {
    res.status(500).json(error)
  }
}

const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json('Post has been updated')
    } else {
      res.status(403).json('You can only update your post')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)

    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json('Post has been deleted')
    } else {
      res.status(403).json('You can only delete your post')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)

    if (!post) {
      res.status(404).json('Post not found!!!')
      return
    }

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

const likeDislikePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } })
      res.status(200).json('Post has been liked')
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } })
      res.status(200).json('Post has been disliked')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const timelineAllPost = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    const userPosts = await Post.find({ userId: currentUser._id })
    const followingPosts = await Promise.all(
      currentUser.followings.map((f_id) => {
        return Post.find({ userId: f_id })
      })
    )

    res.status(200).json(userPosts.concat(...followingPosts))
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPost,
  likeDislikePost,
  timelineAllPost,
}
