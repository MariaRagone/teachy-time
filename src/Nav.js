import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='Nav'>
    <h1>Nav Bar</h1>
    <ul>
        <li><Link to="/">Home</Link></li>
    </ul>
    </nav>
  )
}

export default Nav