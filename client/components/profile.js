import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <nav>
        <ul>
          <li>
            <div id="tittle">Profile</div>
          </li>
          <li>
            <div id="username">{user}</div>
          </li>
          <li>
            <Link to="/dashboard/">Go To Root</Link>
          </li>
          <li>
            <Link to="/dashboard/main">Go To Main</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Profile
