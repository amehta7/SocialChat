import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Users } from '../../dummyData'

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

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
            <img
              className='postProfileImg'
              src={`/assets/${
                Users.filter((u) => u.id === post.userId)[0].profilePicture
              }`}
              alt='Person_Image'
            />

            <span className='postUsername'>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className='postDate'>{post.date} </span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img
            className='postImg'
            src={`/assets/${post.photo}`}
            alt='Post_Image'
          />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src='/assets/like.png'
              alt='Like_Image'
              onClick={likeHandler}
            />
            <img
              className='likeIcon'
              src='/assets/heart.png'
              alt='Heart_Image'
              onClick={likeHandler}
            />
            <span className='postLikeCounter'> {like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'> {post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
