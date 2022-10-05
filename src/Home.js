import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home Page of the Application</h1>
    <nav className='Nav_Design'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
          <li>
            <Link to="/Table">Table</Link>
          </li>
        </ul>
      </nav>
      </>
  )
}

export default Home;