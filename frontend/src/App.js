import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import { AuthContext } from './context/AuthContext'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
