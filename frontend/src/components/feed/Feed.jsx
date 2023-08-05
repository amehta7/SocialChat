import React, { useState, useEffect, useContext } from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

const Feed = ({ username }) => {
  const [postData, setPostData] = useState([])

  const { user } = useContext(AuthContext)

  //console.log(username)
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${user._id}`)
      //console.log(res.data)
      setPostData(
        res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      )
    }

    fetchPosts()
  }, [username, user._id])

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        {(!username || user.username === username) && <Share />}

        {postData.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
