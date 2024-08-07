import React from 'react'
import { Link } from 'react-router-dom';
import Week1 from './Week1';


const Nav = () => {
  return (
    <main className='Nav'>
    
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/missingassignments">Missing Assignments</Link></li>
        <li><Link to="/penalties">Penalties</Link></li>
        <li><Link to="/AIPrompts">AI</Link></li>
        <li><a href="https://classroom.sdi.edu/courses/6166/gradebook">Classroom 1</a></li>
        <li><a href="https://classroom.sdi.edu/courses/6226/gradebook">Classroom 2</a></li>
        <li><Link to="/about">About</Link></li>


    </ul>
    </main>
  )
}

export default Nav