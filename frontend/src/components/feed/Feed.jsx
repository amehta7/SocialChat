import React, { useState, useEffect } from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'

const Feed = () => {
  const [postData, setPostData] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/64c978feecf83f15f4c5050d')
      //console.log(res.data)
      setPostData(res.data)
    }

    fetchPosts()
  }, [])

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />

        {postData.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
