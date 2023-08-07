import React, { useRef } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!")
      return
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {
        await axios.post('/auth/register', user)
        navigate('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }

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
              placeholder='Username'
              required
              type='text'
              className='loginInput'
              ref={username}
            />
            <input
              placeholder='Email'
              required
              className='loginInput'
              type='email'
              ref={email}
            />
            <input
              placeholder='Password'
              required
              className='loginInput'
              type='password'
              minLength='6'
              ref={password}
            />
            <input
              placeholder='Password Again'
              required
              className='loginInput'
              type='password'
              ref={passwordAgain}
            />
            <button className='loginButton' type='submit'>
              Sign Up
            </button>
            <button className='loginRegisterButton'>
              <Link
                to='/login'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Log into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
