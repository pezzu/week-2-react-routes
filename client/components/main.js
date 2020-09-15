import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <div id="title">Main</div>
          </li>
          <li>
            <Link to="/dashboard/profile/dc9c4c49-058d-4801-a85c-2d067195030e">Go To Profile</Link>
          </li>
          <li>
            <Link to="/dashboard">Go To Root</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Main
