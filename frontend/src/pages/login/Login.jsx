import React, { useRef, useContext } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext'
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const email = useRef()
  const password = useRef()

  const { isFetching, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(email.current.value)
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
    navigate('/')
  }

  // console.log(user)
  // console.log(error)

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>SocialChat</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on SocialChat.
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleSubmit}>
            <input
              placeholder='Email'
              type='email'
              required
              className='loginInput'
              ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              required
              minLength='6'
              className='loginInput'
              ref={password}
            />
            <button className='loginButton' type='submit' disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color='inherit' size={20} />
              ) : (
                'Login'
              )}
            </button>
            <span className='loginForgot'>Forgot Password?</span>

            <button className='loginRegisterButton' disabled={isFetching}>
              <Link
                to='/register'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Create a New Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
