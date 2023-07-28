import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import EventIcon from '@mui/icons-material/Event'
import SchoolIcon from '@mui/icons-material/School'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <ChatIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Diversity3Icon className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarkIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutlineOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutlineOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <EventIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <SchoolIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt='Person_Image'
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt='Person_Image'
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt='Person_Image'
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt='Person_Image'
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt='Person_Image'
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              src='/assets/person/2.jpeg'
              alt='Person_Image'
              className='sidebarFriendImg'
            />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
