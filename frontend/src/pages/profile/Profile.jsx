import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Profile = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src='/assets/post/3.jpeg'
                alt='Cover_Picture'
              />
              <img
                className='profileUserImg'
                src='/assets/person/7.jpeg'
                alt='Profile_Image'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>usename</h4>
              <span className='profileInfoDesc'>desc</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
