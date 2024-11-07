import React, { useEffect, useState } from 'react'
import '../styles/profile.css'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/me', {
          credentials: 'include',
        })

        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
        } else {
          const errorMessage = await response.json()
          console.error('Error fetching user data:', errorMessage)
          setMessage(errorMessage.msg || 'User not found. Please log in.')
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        setMessage('An error occurred. Please try again.')
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'DELETE',
        credentials: 'include',
      })

      if (response.ok) {
        setUser(null)
        window.location.href = '/signin'
      } else {
        setMessage('Logout failed. Please try again.')
      }
    } catch (error) {
      console.error('Error logging out:', error)
      setMessage('An error occurred during logout. Please try again.')
    }
  }

  if (message) {
    return <p>{message}</p>
  }

  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <div className='profile-container'>
      <div className='profile-card'>
        <h2>Profile</h2>
        <p><strong>Username:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className='btn logout' onClick={handleLogout}>Logout</button>
        <button className='btn home' onClick={() => window.location.href = '/'}>Home</button>
      </div>
    </div>
  )
}

export default Profile
