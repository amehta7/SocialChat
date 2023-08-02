import React, { useState, useEffect } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})

  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      //console.log(user)
      setUser(res.data)
    }

    fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked((prev) => {
      setIsLiked(!prev)
    })
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${user.username}`}>
              <img
                className='postProfileImg'
                src={
                  `${PF}${user.profilePicture}` || PF + 'person/noAvatar.png'
                }
                alt='Person_Image'
              />
            </Link>

            <span className='postUsername'>{user.username}</span>
            <span className='postDate'>{format(post.createdAt)} </span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img className='postImg' src={PF + `${post.img}`} alt='Post_Image' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={`${PF}like.png`}
              alt='Like_Image'
              onClick={likeHandler}
            />
            <img
              className='likeIcon'
              src={`${PF}heart.png`}
              alt='Heart_Image'
              onClick={likeHandler}
            />
            <span className='postLikeCounter'> {like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>
              {' '}
              {post.comment || 0} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
