// Team.js
import React from 'react'
import '../styles/team.css'

const teamMembers = [
  {
    name: 'Junior',
    role: 'Developer',
    image: '../images/team/man-1.png'
  },
  {
    name: 'Alfin',
    role: 'Developer',
    image: '../images/team/man-2.png'
  },
  {
    name: 'Victor',
    role: 'Designer',
    image: '../images/team/man-3.png'
  }
]

const Team = () => {
  return (
    <div className='team-container'>
      <h2 className='team-title'>Meet Our Team</h2>
      <div className='team-home-container'>
        {teamMembers.map((member, index) => (
          <div className='team-profile-card' key={index}>
            <div className='team-img'>
              <img src={member.image} alt={member.name} />
            </div>
            <div className='team-caption'>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className='team-social-links'>
                <i className='fa-brands fa-facebook' />
                <i className='fa-brands fa-twitter' />
                <i className='fa-brands fa-instagram' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
