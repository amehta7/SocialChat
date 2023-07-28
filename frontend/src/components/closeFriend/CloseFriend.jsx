import React from 'react'
import './closeFriend.css'

const CloseFriend = ({ user }) => {
  return (
    <li className='sidebarFriend'>
      <img
        src={`assets/${user.profilePicture}`}
        alt={user.username}
        className='sidebarFriendImg'
      />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  )
}

export default CloseFriend
