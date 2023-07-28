import React from 'react'
import './online.css'

const Online = ({ user }) => {
  return (
    <li className='rightbarFriend'>
      <div className='rightbarProfileImgContainer'>
        <img
          className='rightbarProfileImg'
          src={`assets/${user.profilePicture}`}
          alt={user.username}
        />
        <span className='rightbarOnline'></span>
      </div>
      <span className='rightbarUsername'>{user.username}</span>
    </li>
  )
}

export default Online
