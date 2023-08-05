import React, { useState, useEffect, useContext } from 'react'
import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Rightbar = ({ user }) => {
  const { user: currentUser, dispatch } = useContext(AuthContext)

  const [friends, setFriends] = useState([])
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  )

  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const getFollowings = async () => {
      try {
        const res = await axios.get(`/users/friends/${user._id}`)

        setFriends(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getFollowings()
  }, [user])

  const handleClick = async () => {
    try {
      // console.log(user.username)
      // console.log(currentUser.username)
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        })
        dispatch({ type: 'UNFOLLOW', payload: user._id })
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        })
        dispatch({ type: 'FOLLOW', payload: user._id })
      }
    } catch (error) {
      console.log(error)
    }

    setFollowed(!followed)
  }

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
        {user.username !== currentUser.username && (
          <button className='rightbarFollowButton' onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          {friends.length === 0
            ? `You don't follow anyone`
            : friends.map((f) => (
                <Link
                  key={f._id}
                  to={`/profile/${f.username}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className='rightbarFollowing'>
                    <img
                      src={
                        f.profilePicture
                          ? `${PF}/${f.profilePicture}`
                          : `${PF}person/noAvatar.png`
                      }
                      alt='Person_Image'
                      className='rightbarFollowingImg'
                    />

                    <span className='rightbarFollowingName'>{f.username}</span>
                  </div>
                </Link>
              ))}
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar
