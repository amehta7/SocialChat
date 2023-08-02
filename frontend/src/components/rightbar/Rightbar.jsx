import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({ profile }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightBar = () => {
    return (
      <React.Fragment>
        <div className='birthdayContainer'>
          <img
            className='birthdayImg'
            src='assets/gift.png'
            alt='Birthday_Image'
          />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='Ad_Image' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </React.Fragment>
    )
  }

  const ProfileRightBar = () => {
    return (
      <React.Fragment>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>New York</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Albany</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='/assets/person/1.jpeg'
              alt='Person_Image'
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Doe</span>
          </div>

          <div className='rightbarFollowing'>
            <img
              src='/assets/person/2.jpeg'
              alt='Person_Image'
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Doe</span>
          </div>

          <div className='rightbarFollowing'>
            <img
              src='/assets/person/3.jpeg'
              alt='Person_Image'
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Doe</span>
          </div>

          <div className='rightbarFollowing'>
            <img
              src='/assets/person/4.jpeg'
              alt='Person_Image'
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Doe</span>
          </div>

          <div className='rightbarFollowing'>
            <img
              src='/assets/person/5.jpeg'
              alt='Person_Image'
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John Doe</span>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar
